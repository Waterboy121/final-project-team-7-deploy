import Image from 'next/image'
import styles from './page.module.css'
import Signin from '../Screens/Signup/signin'
import Signup from '../Screens/Login/signup'
import Home from '../Screens/Home/home'

export default function page() {
  return (
    <main className={styles.main}>
      <Home />
    </main>
  )
}
