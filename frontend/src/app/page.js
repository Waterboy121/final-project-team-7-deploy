import Image from 'next/image'
import styles from './page.module.css'
import Signin from '../Screens/Signin/signin'
import Signup from '../Screens/Signup/signup'
import Home from '../Screens/Home/home'

export default function DefaultPage() {
  return (
    <main className={styles.main}>
      <Signup />
    </main>
  )
}
