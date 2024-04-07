import React from 'react'


const DashboardLayout = ({
    children,
}: Readonly<{children: React.ReactNode}>) => {
  return (
    <>
    <div className='bg-red-950'>This is DashboardLayout</div>
    {children}
    <div className='bg-red-950'>This is DashboardLayout</div>
    </>
  )
}

export default DashboardLayout