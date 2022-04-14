import { useState, useEffect } from 'react';
import { github } from '../../services/periodicTable';

import { FaGithub} from 'react-icons/fa';
import { FiX } from 'react-icons/fi';

import styles from './styles.module.scss';


export function SignInButton() {

  const [ isUserLoggedIn, setIsUserLoggedIn ] = useState(false)
  const [ userLogin, setUserLogin ] = useState<string>('')

  const changeLogged = () => {
    const typeUser = prompt('Digite seu usuário do GitHub')
    if(typeUser){
      setUserLogin(typeUser)
      setIsUserLoggedIn(true)
    }
  }

  useEffect(() => {
    async function callApi(){
      if(isUserLoggedIn){
        const user = await github.get(`/users/${userLogin}`)
        .then(response => response.data)
        console.log(user)
      }
    }
    callApi()
  }, [isUserLoggedIn])


  return isUserLoggedIn ? (
    <button 
      type="button" 
      className={ styles.signInButton }
      
    >
      <FaGithub color="#04d361"/>
      Philipe Anderson
      <FiX color="#737380" className={ styles.closeIcon } onClick={() => setIsUserLoggedIn(false)}/>
    </button>   
  ) : (
    <button 
      type="button"
      onClick={() => changeLogged()}
      className={ styles.signInButton }
    >
      <FaGithub color="#fede00"/>
        Sign in
    </button>
  )
}