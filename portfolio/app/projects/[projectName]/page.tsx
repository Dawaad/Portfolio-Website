import React from 'react'
import {useRouter} from 'next/navigation'
function page({params}: {params: {projectName: string}}) {
    
  return (
    <div className='text-zinc-200'>
     {params.projectName}
    </div>
  )
}

export default page

