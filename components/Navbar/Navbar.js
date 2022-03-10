import ActiveLink from '../ActiveLink/ActiveLink'
import { menuItems } from './menuItems'
import styles from './Navbar.module.css'

const NavBar = () => {
  return (
    <nav className={styles['menu-container']}>
      {menuItems.map(({ href, text }) => (
        <ActiveLink key={href} text={text} href={href} />
      ))}
    </nav>
  )
}

export default NavBar
