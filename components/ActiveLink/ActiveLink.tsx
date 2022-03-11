import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC } from 'react'
import styles from './ActiveLink.module.css'

interface ActiveLinkProps {
  href: string
  text: string
}

const ActiveLink: FC<ActiveLinkProps> = ({ href, text }) => {
  const { asPath } = useRouter()

  return (
    <Link href={href}>
      <a className={asPath === href ? styles['active-menu'] : ''}>{text}</a>
    </Link>
  )
}

export default ActiveLink
