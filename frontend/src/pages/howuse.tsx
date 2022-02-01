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
  const arr = [1, 2, 3, 4, 5, 6, 7];

  useEffect(() => {
    periodic.get('https://apiperiodictable.herokuapp.com/')
      .then(response => setElements(response.data))
  }, [])


  return (
    <div className={styles.contentContainer}>
      <h1>How Use</h1>
      {/* {elements.map(element => (
        console.log(element.name))
        
      )} */}

       {elements.map(element => (
        <div key={element.atomicNumberZ}>
          <h3>{element.name}</h3>
          <p>{element.symbol}</p>
          
        </div>
       ))}

    </div>
  )
}