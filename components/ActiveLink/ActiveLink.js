import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from './ActiveLink.module.css'

const ActiveLink = ({ href, text }) => {
  const { asPath } = useRouter()

  return (
    <Link href={href}>
      <a className={asPath === href ? styles['active-menu'] : ''}>{text}</a>
    </Link>
  )
}

export default ActiveLink
