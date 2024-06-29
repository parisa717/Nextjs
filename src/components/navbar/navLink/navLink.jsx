"use client";
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styles from "./navlink.module.css"
const Navlink = ({items}) => {
    const pathName = usePathname()

  return (
    <Link className={`${styles.container} ${pathName === items.path && styles.active}`} href={items.path} >{items.title}</Link>
  )
}

export default Navlink