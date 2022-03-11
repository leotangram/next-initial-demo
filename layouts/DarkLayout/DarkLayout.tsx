import { FC } from 'react'
import styles from './DarkLayout.module.css'

const DarkLayout: FC = ({ children }) => {
  return (
    <div className={styles['dark-layout-container']}>
      <h3>DarkLayout</h3>
      <div>{children}</div>
    </div>
  )
}

export default DarkLayout
