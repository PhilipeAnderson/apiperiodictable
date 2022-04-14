import { FaGithub} from 'react-icons/fa';
import { FiX } from 'react-icons/fi';

import styles from './styles.module.scss';

const isUserLoggedIn = false;

export function SignInButton() {
  return isUserLoggedIn ? (
    <button type="button" className={ styles.signInButton }>
      <FaGithub color="#04d361"/>
      Philipe Anderson
      <FiX color="#737380" className={ styles.closeIcon } />
    </button>   
  ) : (
    <button type="button" className={ styles.signInButton }>
      <FaGithub color="#fede00"/>
      Sign in
    </button>
  )
}