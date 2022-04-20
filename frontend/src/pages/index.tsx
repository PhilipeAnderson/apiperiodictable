import Head from 'next/head';
import Image from 'next/image';
import { BuyMeACoffee } from '../components/BuyMeACoffee';
import styles from './home.module.scss';

// interface HomeProps {
//   product: {
//     priceId: string;
//     amount: number;
//   }
// }

//{ product }: HomeProps
export default function Home() {
  return (
    <main className={styles.container}>
      <div className={styles.background}>
        <section className={styles.hero}>
          <span>🧪 Hey student</span>
          <h1>All the elements from <span>Periodic</span><br />Table :)</h1>
          <p><span>Super easy</span> for you use in your projects <span>through by API</span></p>
          <BuyMeACoffee />
        </section>

        <div className={styles.image}>
          <Image
            src="/img/hero.gif"
            alt="Gif Animated"
            width={300}
            height={300}
          />
        </div>
      </div>
    </main>
  )
}