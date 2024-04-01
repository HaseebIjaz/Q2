import { useRouter } from 'next/navigation'
import React from 'react'

function Setting() {
    const router = useRouter();
    const handleSetting = () => {
        router.back()
    }
    return (
    <div>
        <div className='py-3' onClick={handleSetting}>
            Settings
        </div>
    </div>
  )
}

export default Setting