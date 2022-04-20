import styles from './howuse.module.scss';
import { PeriodicTable } from '../components/PeriodicTable'

export default function Howuse() {

  return (
    <main className={styles.container}>
      <div className={styles.usageExamples}>
      <h1>How Use</h1>
      <h2>Super Easy</h2>
        <p>
          Just use tradicional methods of query a JSON document, you can set with axios or fetchAPI for javascript for exemple.
          The url for query api is: <a href='https://apiperiodictable.herokuapp.com/' target="_blank" rel="noopener noreferrer"> Link API</a>  its a JSON format!
        </p>
      </div>
      <div className={styles.tableRender}>
        <PeriodicTable />
      </div>
    </main>
    
    
  )
}
