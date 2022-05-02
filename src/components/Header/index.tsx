import Link from 'next/link'
import styles from './header.module.scss'
export default function Header() {
  return (
    <div className={styles.containerHeader}>
      <Link href={'/'}>
        <img alt="logo " src="./Logo.svg"></img>
      </Link>
    </div>
  )
}