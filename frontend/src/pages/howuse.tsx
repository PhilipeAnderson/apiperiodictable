import { useState, useEffect } from 'react';
import { periodic } from '../services/periodicTable';
import styles from './howuse.module.scss';

interface ElementsProps {
  elements: {
    atomicMass: number,
    atomicNumberZ: number,
    category: string,
    discovered: { by: string, year: number },
    group: number,
    name: string,
    period: number,
    radioactive: boolean,
    standardState: number,
    symbol: string,
  }
}

export default function Howuse() {

  const [elements, setElements] = useState([]);

  useEffect(() => {
    periodic.get('https://apiperiodictable.herokuapp.com/')
      .then(response => setElements(response.data))
  }, [])


  return (
    <main className={styles.container}>
      <h1>How Use</h1>

      <section className={ styles.content }>
       {elements.map(element => (
         <div key={element.atomicNumberZ}>
          <h3>{element.name}</h3>
          <p>{element.symbol}</p> 
        </div>
       ))}

       </section>
    </main>
  )
}