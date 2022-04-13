import { GetStaticProps } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { SubscribeButton } from '../components/SubscribeButton';
import { BuyMeACoffee } from '../components/BuyMeACoffee';
import { stripe } from '../services/stripe';

import styles from './home.module.scss';


interface HomeProps {
  product: {
    priceId: string;
    amount: number;
  }
}

export default function Home({ product }: HomeProps) {
  return (
    <>
      <Head>Home | API Periodic Table</Head>
      <main className={ styles.contentContainer }>
        <section className={ styles.hero }>
          <span>🧪 Hey student</span>
          <h1>All the elements from <span>Periodic</span><br />Table :)</h1>
          <p><span>Super easy</span> for you use in your projects <span>through by API</span></p>
          <BuyMeACoffee />
          {/* <SubscribeButton priceId={ product.priceId } amount={product.amount}/> */}
        </section>

        <Image 
          src="/img/hero.gif" 
          alt="Scientist Crazy on Lab"
          width={350}
          height={350} 
        />
      </main>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const price = await stripe.prices.retrieve('price_1KKTTtDdIVojx2mYJjMxuVk8',{
    expand: ['product']
  })

  const product = {
    priceId: price.id,
    //amount: (price.unit_amount / 100)
    amount: new Intl.NumberFormat('en-US',{
      style: 'currency',
      currency: 'USD'  
    }).format(price.unit_amount / 100)
  };

  return{
    props: {
      product
    },
    revalidate: 60 * 60 * 24 // 24hours

  }
}
