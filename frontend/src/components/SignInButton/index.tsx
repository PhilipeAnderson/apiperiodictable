import { FaGithub} from 'react-icons/fa';
import { FiX } from 'react-icons/fi';
import { signIn, signOut, useSession } from 'next-auth/react';

import styles from './styles.module.scss';

export function SignInButton() {

  const session = useSession()



  return session ? (
    <button 
    type="button" 
    className={ styles.signInButton }
    onClick={() => signOut()}
    >
      <FaGithub color="#04d361"/>
      <FiX 
        color="#737380" 
        className={ styles.closeIcon }
      />
    </button>   
  ) : (
    <button 
      type="button"
      className={ styles.signInButton }
      onClick={() => signIn('github')}
    >
      <FaGithub color="#fede00"/>
        Sign in
    </button>
  )
}