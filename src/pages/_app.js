
import { Avatar } from '../components/Avatar'

import '../styles/globals.scss'
import styles from './app.module.scss'

function MyApp({ Component, pageProps }) {
  return (
    <div className={styles.wrapper}>
      <Avatar />
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
