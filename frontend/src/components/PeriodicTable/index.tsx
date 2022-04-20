import React, { useState, useEffect} from 'react';
import { Loading } from '../../components/Loading';
import styles from './styles.module.scss';

import { db } from '../../db/';

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


export function PeriodicTable() {

  const [elements, setElements] = useState([]);
  const [removeLoading, setRemoveLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setElements(db)
      setRemoveLoading(true)
    }, 100)
   }, [])

  return(
    <div className={styles.container}>
    <div className={styles.table}>
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
    </div>
    </div>
  )
}