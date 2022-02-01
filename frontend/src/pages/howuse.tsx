import { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './howuse.module.scss';

interface ElementsProps {
  element: {
   name: any
  }
}

export default function Howuse() {

  const [elements, setElements] = useState<ElementsProps>();

  useEffect(() => {
    axios.get('https://apiperiodictable.herokuapp.com/')
      .then(response => setElements(response.data))
  }, [])


  return(
    <div className={ styles.contentContainer}>
      <h1>How Use</h1>
      {elements => elements.map(element => {
        {console.log(element.name)}
      })}

    </div>
  )
}