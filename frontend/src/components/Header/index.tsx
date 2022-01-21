import { SignInButton } from '../SignInButton';
import Image from 'next/image';

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
          <a href="">Home</a>
          <a href="">How Use?</a>
          <a href="">Docs</a>
        </nav>

        <SignInButton />
      </div>
    </header>
  )
}