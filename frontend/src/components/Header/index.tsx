import { SignInButton } from '../SignInButton';
import Image from 'next/image';
import Link from 'next/link';

import styles from './styles.module.scss';

export function Header() {
  return(
    <header className={ styles.headerContainer }>
      <div className={ styles.headerContent }>
        <Image
          src="/img/logo.png" 
          alt="logo from API Periodic Table"
          width={70}
          height={70}
        />
        <nav>
          <Link href="/">Home</Link>
          <Link href="/howuse">How Use?</Link>
          <Link href="/docs">Docs</Link>
        </nav>

        <SignInButton />
      </div>
    </header>
  )
}