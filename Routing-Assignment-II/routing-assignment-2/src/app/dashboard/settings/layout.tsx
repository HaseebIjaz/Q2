import React from 'react'

const SettingsLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <>
      <div className='bg-blue-950'>This is SettingsLayout</div>
      {children}
      <div className='bg-blue-950'>This is SettingsLayout</div>
    </>
  )
}

export default SettingsLayout