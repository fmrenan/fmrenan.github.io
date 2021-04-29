
import { Card } from '../components/Card'

import styles from './home.module.scss'

export default function Home() {
  return (
    <main className={styles.main}>
      <nav>
        <ul>
          <li>
            <a href="#" className={styles.active}>about</a>
          </li>
          
          <li>
            <a href="#" >projects</a>
          </li>
          
          <li>
            <a href="#" >contact</a>
          </li>
        </ul>
      </nav>
      
      <Card />
    </main>
  )
}