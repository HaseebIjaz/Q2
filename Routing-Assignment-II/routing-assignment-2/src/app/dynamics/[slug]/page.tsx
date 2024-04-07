import React from 'react'

const page = ({params}: {params: {slug: string}}) => {
  return (
    <div>
        The slug is {params.slug}
    </div>
  )
}

export default page