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

      <div>
        <h2>Super Easy</h2>
        <p>
          Just use tradicional methods of query a JSON document, you can set with axios or fetchAPI for javascript for exemple.
          The url for query api is: https://apiperiodictable.herokuapp.com/ she is a Json format.
        </p>
        <div>
          <img src="/img/fetchapi.png" alt="example the use with fetch" />
          <img src="/img/axios.png" alt="example the use with axios" />
        </div>
      </div>

      <section className={ styles.content }>
       {elements.map((element, index) => (
         <div key={index}>
          <h4>{element.atomicNumberZ}</h4> 
          <h1>{element.symbol}</h1> 
          <h4>{element.atomicMass}</h4>
          <h4>{element.name}</h4>
        </div>
       ))}

       </section>
    </main>
  )
}