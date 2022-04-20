import styles from './styles.module.scss';

export function Footer() {
  return(
    <footer className={styles.container}>
      <div className={styles.content}>
        <h3>logo</h3>
        <h3>helpUs</h3>
        <h3>Contact US</h3>
      </div>
    </footer>
  )
}