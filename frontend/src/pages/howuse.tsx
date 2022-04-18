import { useState, useEffect } from 'react';
import { periodic } from '../services/periodicTable';
import { Loading } from '../components/Loading';
import styles from './howuse.module.scss';

import { db } from '../db';

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
  const [removeLoading, setRemoveLoading] = useState(false);

 // useEffect(() => {
   // setTimeout(() => {
     // periodic.get('https://apiperiodictable.herokuapp.com/')
     // .then(response => {
     //   setElements(response.data)
       // setRemoveLoading(true)
     // })
   // }, 5000)
 // }, [])


   useEffect(() => {
    setTimeout(() => {
      setElements(db)
      setRemoveLoading(true)
    }, 5000)
   }, [])

  return (
    <main className={styles.container}>
      <h1>How Use</h1>
      <h2>Super Easy</h2>
      <div className={styles.usageExamples}>
        <p>
          Just use tradicional methods of query a JSON document, you can set with axios or fetchAPI for javascript for exemple.
          The url for query api is: https://apiperiodictable.herokuapp.com/ its a JSON format!
        </p>
        {/* <div>
          <img src="/img/fetchapi.png" alt="example the use with fetch" />
          <img src="/img/axios.png" alt="example the use with axios" />
        </div> */}
      </div>

      {!removeLoading && <Loading />}
      <div className={styles.div_body}>
      <section className={ styles.content }>
       {elements.map((element, index) => (
         <div className={'tabela-periodica--ico-' + element.atomicNumberZ} key={index}>
          <h3>{element.atomicNumberZ}</h3> 
        <h2 className={"symbol_" + element.symbol }>{element.symbol}</h2> 
          <h4>{element.atomicMass}</h4>
          <h5>{element.name}</h5>
        </div>
       ))}
       </section>
       </div>
    </main>                                   
  )
}
