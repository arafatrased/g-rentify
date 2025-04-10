'use client'
import { usePathname, useRouter } from 'next/navigation'
import React from 'react'

const BreadCrumbs = () => {

    const router = useRouter()
    const pathName = usePathname()
    const pathSegments = pathName.split('/').filter((seg) => seg)


    const handleNavigate = (index) => {
        const newPath = `/${pathSegments.slice(0, index + 1).join('/')}`
        router.push(newPath)
    }

  return (
    <div>
      {pathSegments.map((path, index) => {
        return <span key={index} className={`hover:text-green-600 cursor-pointer ${index == pathSegments.length - 1 ? 'text-green-600' : ''}`} onClick={()=> handleNavigate(index)}>{path}{index == pathSegments.length-1 ? <></> : '/'}</span>
      })}
    </div>
  )
}

export default BreadCrumbs
