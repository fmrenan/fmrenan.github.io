
import { Header } from '../components/Header'

import '../styles/globals.scss'
import styles from './app.module.scss'

function MyApp({ Component, pageProps }) {
  return (
    <div className={styles.wrapper}>
      <Header />
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
