import React from 'react'

const ContactLayout = ({children}: Readonly<{children: React.ReactNode}>) => {
  return (
    <>
    <div>ContactLayout</div>
    {children}
    <div>ContactLayout</div>
    </>
  )
}

export default ContactLayout