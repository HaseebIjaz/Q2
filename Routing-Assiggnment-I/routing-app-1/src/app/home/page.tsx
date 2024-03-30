import React from 'react'
import Link from 'next/link';

function HomePage() {
  return (
    <div className='flex flex-col'>
        <p>This is the Home Page !</p>
        <Link href='/dashboard' className={"bg-red-500"}>
            <p>Click here to go to the Dashboard Page !</p>
        </Link>
    </div>
  )
}

export default HomePage