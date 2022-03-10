import Head from 'next/head'
import NavBar from '../../components/Navbar/Navbar'
import styles from './MainLayout.module.css'

const MainLayout = ({ children }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home - Leo</title>
        <meta name="description" content="Home Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar />

      <main className={styles.main}>{children}</main>
    </div>
  )
}

export default MainLayout
