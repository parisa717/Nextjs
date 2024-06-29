"use client";

import Image from 'next/image';
import { useState } from 'react'
import Navlink from '../navLink/navLink'
import styles from "./links.module.css"
const Links = () => {
    const [open, setOpen] = useState(false);

    const links = [
        {
            title:"Home",
            path:"/"
        },
        {
            title:"About",
            path:"/about"
        },
        {
            title:"Contact",
            path:"/contact"
        },
        {
            title:"Blog",
            path:"/blog"
        }
    ]
   
     const session = true;

      const isAdmin = true;
  return (
    <div>
       <div  className={styles.links}>
       {
            links.map(links=><Navlink key={links.path} items={links}/>)
        }
          {
            session ? <>
            { isAdmin &&   <Navlink items={{ title: "Admin", path: "/admin" }} />}
                <button className='logout'>logout</button>
            </> 
            :  <Navlink items={{ title: "Login", path: "/login" }} />
        }
       </div>
      
        <div className={styles.menuButton} onClick={()=>setOpen((prev)=>!prev)}>
            <Image src='/menu.png' alt='' width={25} height={25} /></div> 
      {open && (
        <div className={styles.mobileLinks}>
          {links.map((link) => (
            <Navlink items={link} key={link.title} />
          ))}
        </div>
      )}
    </div>
  )
}

export default Links