export default function Membership() {
  return (
    <main className='max-w-2xl mx-auto py-12 px-4'>
      <h2 className='text-2xl font-semibold'>Membership</h2>
      <p className='mt-4 text-gray-700'>Join ICAN to get event discounts, volunteer opportunities, and monthly updates.</p>
      <form className='mt-6 grid gap-3' onSubmit={(e)=>{e.preventDefault(); alert('Membership submitted (demo)');}}>
        <input placeholder='Full name' className='p-3 border rounded-md' required />
        <input placeholder='Email' type='email' className='p-3 border rounded-md' required />
        <textarea placeholder='Message (optional)' className='p-3 border rounded-md' rows={4}></textarea>
        <button className='px-4 py-3 bg-icanBlue text-white rounded-md'>Submit</button>
      </form>
    </main>
  )
}