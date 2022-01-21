import Head from 'next/head';
import Image from 'next/image';
import { SubscribeButton } from '../components/SubscribeButton';

import styles from './home.module.scss';

export default function Home() {
  return (
    <>
      <Head>Home | API Periodic Table</Head>
      <main className={ styles.contentContainer }>
        <section className={ styles.hero }>
          <span>🧪 Hey student</span>
          <h1>All the elements from <span>Periodic</span><br />Table :)</h1>
          <p><span>Super easy</span> for you use in your projects <span>through by API</span></p>
          <SubscribeButton />
        </section>

        <Image 
          src="/img/hero.png" 
          alt="Scientist Crazy on Lab"
          width={400}
          height={400} 
        />
      </main>
    </>
  )
}
