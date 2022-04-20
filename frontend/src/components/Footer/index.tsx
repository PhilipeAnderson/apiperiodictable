import Image from 'next/image';
import { BuyMeACoffee } from '../BuyMeACoffee';
import styles from './styles.module.scss';

export function Footer() {
  return(
    <main className={styles.container}>
      <div className={styles.content}>
        <Image
          src="/img/hero.gif"
          alt="Logo API"
          width={200}
          height={200}
        />
        <section>
          <h3>Help The Project</h3>
          <BuyMeACoffee />
        </section>
      </div>
    </main>
  )
}