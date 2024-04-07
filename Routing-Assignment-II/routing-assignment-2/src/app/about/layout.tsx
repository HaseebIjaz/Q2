import React from 'react'

const AboutLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
    return (
        <>
            <div>This is AboutLayout</div>
            {children}
            <div>This is AboutLayout</div>
        </>
    )
}

export default AboutLayout