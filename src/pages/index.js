import Head from 'next/head'

import styles from './home.module.scss'

export default function Home() {
  return (
    <div className={styles.homePage}>
      <Head>
        <title>Renan Muniz</title>
      </Head>
    </div>
  )
}