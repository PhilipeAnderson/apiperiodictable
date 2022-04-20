import { SignInButton } from '../SignInButton';
import Image from 'next/image';
import Link from 'next/link';

import styles from './styles.module.scss';

export function Header() {
  return(
    <header className={ styles.headerContainer }>
      <div className={ styles.headerContent }>
        <Link href="/">
          <Image
            src="/img/logoAnimated.gif" 
            alt="logo from API Periodic Table"
            width={70}
            height={70}
          />
        </Link>
        
        <nav>
          <Link href="/howuse">HowUse?</Link>
          <Link href="/documentation">Documentation</Link>
        </nav>

        <SignInButton />
      </div>
    </header>
  )
}