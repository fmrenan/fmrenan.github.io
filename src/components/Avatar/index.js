import styles from './styles.module.scss'

export function Avatar(){

  return(
    <section className={styles.avatarContainer}>
      <h1>Hello,</h1>
      <img src="./avatar.png" alt="Avatar Renan Muniz"/>
      <span>
        <h1>I'm <strong>Renan Muniz</strong></h1>
      </span>
      <h2>Student and Developer</h2>
    </section>
  )
}