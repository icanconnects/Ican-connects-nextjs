import { JWT } from 'google-auth-library';

// Generate a unique membership ID
function generateMemberId() {
  const timestamp = Date.now().toString(36).toUpperCase();
  const random = Math.random().toString(36).substring(2, 8).toUpperCase();
  return `ICAN-${timestamp}-${random}`;
}

// Get JWT token
async function getAuthToken() {
  let privateKey = process.env.GOOGLE_SHEETS_PRIVATE_KEY || '';
  
  // Handle newline characters
  privateKey = privateKey.replace(/\\n/g, '\n');

  const auth = new JWT({
    email: process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
    key: privateKey,
    scopes: [
      'https://www.googleapis.com/auth/spreadsheets',
      'https://www.googleapis.com/auth/drive',
    ],
  });

  const token = await auth.getAccessToken();
  return token.token;
}

// Validate email format
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Get existing emails from Google Sheet
async function getExistingEmails() {
  const token = await getAuthToken();
  const spreadsheetId = process.env.GOOGLE_SHEETS_SPREADSHEET_ID;
  
  const response = await fetch(
    `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/Sheet1!C:C`,
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    }
  );

  if (!response.ok) {
    throw new Error('Failed to fetch existing emails');
  }

  const data = await response.json();
  const emails = data.values ? data.values.slice(1).flat().filter(e => e && e !== 'email') : [];
  return emails;
}

// Append row to Google Sheet using Sheets API
async function appendToSheet(row) {
  const token = await getAuthToken();
  const spreadsheetId = process.env.GOOGLE_SHEETS_SPREADSHEET_ID;
  const range = 'Sheet1!A:G'; // Adjust if your sheet has a different name

  const response = await fetch(
    `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${range}:append?valueInputOption=USER_ENTERED`,
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        values: [row],
      }),
    }
  );

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error.message || 'Failed to append to sheet');
  }

  return await response.json();
}

// POST - Create new membership
export async function POST(request) {
  try {
    const body = await request.json();

    // Validate required fields
    if (!body.fullName || !body.email || !body.phone || !body.address) {
      return Response.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Validate email format
    if (!isValidEmail(body.email)) {
      return Response.json(
        { error: 'Please enter a valid email address' },
        { status: 400 }
      );
    }

    // Normalize email (lowercase)
    const normalizedEmail = body.email.toLowerCase().trim();

    // Check for duplicate email
    try {
      const existingEmails = await getExistingEmails();
      const emailExists = existingEmails.some(email => 
        email.toLowerCase().trim() === normalizedEmail
      );

      if (emailExists) {
        // Fetch the existing member's data
        try {
          const token = await getAuthToken();
          const spreadsheetId = process.env.GOOGLE_SHEETS_SPREADSHEET_ID;
          
          const response = await fetch(
            `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/Sheet1!A:G`,
            {
              method: 'GET',
              headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
              },
            }
          );

          const data = await response.json();
          const rows = data.values || [];
          
          // Find the row with matching email (column C is index 2)
          const existingMember = rows.find(row => 
            row[2] && row[2].toLowerCase().trim() === normalizedEmail
          );

          if (existingMember) {
            const memberData = {
              id: existingMember[0],
              fullName: existingMember[1],
              email: existingMember[2],
              phone: existingMember[3],
              address: existingMember[4],
              message: existingMember[5] || '',
              joinDate: existingMember[6],
              isExisting: true,
            };

            return Response.json({
              success: false,
              member: memberData,
              error: 'This email is already registered',
            }, { status: 409 });
          }
        } catch (err) {
          console.error('Error fetching existing member:', err);
        }

        return Response.json(
          { error: 'This email is already registered as a member' },
          { status: 409 }
        );
      }
    } catch (error) {
      console.error('Error checking for duplicates:', error);
      // Continue even if duplicate check fails, but log it
    }

    const memberId = generateMemberId();
    const joinDate = new Date().toISOString();

    // Prepare row data for Google Sheet
    const rowData = [
      memberId,
      body.fullName.trim(),
      normalizedEmail,
      body.phone.trim(),
      body.address.trim(),
      body.message ? body.message.trim() : '',
      joinDate,
    ];

    // Append to Google Sheet
    await appendToSheet(rowData);

    const memberData = {
      id: memberId,
      fullName: body.fullName,
      email: normalizedEmail,
      phone: body.phone,
      address: body.address,
      message: body.message || '',
      joinDate,
    };

    return Response.json({
      success: true,
      member: memberData,
      memberId,
    }, { status: 201 });
  } catch (error) {
    console.error('Membership API error:', error);
    console.error('Error details:', error.message);
    return Response.json(
      { error: `Failed to create membership: ${error.message}` },
      { status: 500 }
    );
  }
}

// GET - Retrieve member by ID
export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const memberId = searchParams.get('id');

    if (!memberId) {
      return Response.json(
        { error: 'Member ID is required' },
        { status: 400 }
      );
    }

    const doc = await initializeSheet();
    const sheet = doc.sheetsByIndex[0];
    const rows = await sheet.getRows();

    const memberRow = rows.find(row => row.memberId === memberId);

    if (!memberRow) {
      return Response.json(
        { error: 'Member not found' },
        { status: 404 }
      );
    }

    const member = {
      id: memberRow.memberId,
      fullName: memberRow.fullName,
      email: memberRow.email,
      phone: memberRow.phone,
      address: memberRow.address,
      message: memberRow.message || '',
      joinDate: memberRow.joinDate,
    };

    return Response.json({ member }, { status: 200 });
  } catch (error) {
    console.error('Membership GET error:', error);
    return Response.json(
      { error: 'Failed to retrieve member' },
      { status: 500 }
    );
  }
}
