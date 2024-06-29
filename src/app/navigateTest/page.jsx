"use client"
import Link from 'next/link'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import React from 'react'

const NavigationTest = () => {
    const router = useRouter()
    const pathName = usePathname()
    const searchParams = useSearchParams()
    console.log(searchParams.get("q"))
    const handleClick = ()=>{
        console.log("click")
        router.push("/")
        
    }
  return (
    <div>
        <Link href="/" prefetch={false}>click</Link>
        <button onClick={handleClick}>click here </button>
    </div>
  )
}

export default NavigationTest