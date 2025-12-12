# Google Sheets Setup Guide for ICAN Membership

## Step 1: Create a Google Cloud Project

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Click "Create Project"
3. Name it "ICAN Membership"
4. Click "Create"

## Step 2: Enable Google Sheets API

1. In the Google Cloud Console, go to "APIs & Services" > "Library"
2. Search for "Google Sheets API"
3. Click it and press "Enable"
4. Search for "Google Drive API"
5. Click it and press "Enable"

## Step 3: Create a Service Account

1. Go to "APIs & Services" > "Credentials"
2. Click "Create Credentials" > "Service Account"
3. Fill in the name: "ican-membership-service"
4. Click "Create and Continue"
5. Skip the optional steps and click "Done"

## Step 4: Generate Private Key

1. Click on the service account you just created
2. Go to "Keys" tab
3. Click "Add Key" > "Create new key"
4. Choose "JSON" and click "Create"
5. A JSON file will download - save it

## Step 5: Get Credentials

From the downloaded JSON file, copy:
- `private_key` - Copy the entire key including `-----BEGIN PRIVATE KEY-----` and `-----END PRIVATE KEY-----`
- `client_email` - This is your service account email

## Step 6: Create Google Sheet

1. Go to [Google Sheets](https://sheets.google.com/)
2. Click "Create" > "Blank spreadsheet"
3. Name it "ICAN Membership"
4. Add the following headers in the first row:
   - A1: memberId
   - B1: fullName
   - C1: email
   - D1: phone
   - E1: address
   - F1: message
   - G1: joinDate

## Step 7: Share Sheet with Service Account

1. In the Google Sheet, click "Share"
2. Paste the service account email (from Step 5)
3. Give it "Editor" access
4. Click "Share"

## Step 8: Get Spreadsheet ID

1. The sheet URL looks like: `https://docs.google.com/spreadsheets/d/SPREADSHEET_ID/edit`
2. Copy the `SPREADSHEET_ID` part

## Step 9: Add Environment Variables

1. Open `.env.local` in your project root
2. Fill in the values:

```
GOOGLE_SHEETS_PRIVATE_KEY=<paste the private_key from JSON file>
GOOGLE_SHEETS_CLIENT_EMAIL=<paste the client_email>
GOOGLE_SHEETS_SPREADSHEET_ID=<paste the spreadsheet ID>
```

**Important:** The private key needs newline characters. When pasting, make sure to replace actual newlines with `\n` if needed.

## Step 10: Install Dependencies

Run in terminal:
```bash
npm install
```

## Step 11: Test

1. Start the dev server: `npm run dev`
2. Go to `http://localhost:3000/membership`
3. Fill out the form and submit
4. Check your Google Sheet - the data should appear!

## Troubleshooting

- **403 Forbidden**: Check that the Google Sheet is shared with the service account email
- **404 Sheet Not Found**: Verify the Spreadsheet ID is correct
- **Missing API**: Make sure both Google Sheets API and Google Drive API are enabled
- **Key Error**: Check that the private key is correctly formatted with proper newlines
