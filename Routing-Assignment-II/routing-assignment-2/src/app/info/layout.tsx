import React from 'react'

const InfoLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
    return (
        <div>
            <div>InfoLayout</div>
            {children}
            <div>InfoLayout</div>
        </div>
    )
}

export default InfoLayout