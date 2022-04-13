import Image from "next/image"
import styles from './styles.module.scss';

export const Loading = () => {
  return(
    <div className={styles.container}>
      <Image
        src="/img/loading.gif"
        alt="Loading"
        width={200}
        height={200}
      />
      <p>...Waiting fot data</p>
    </div>
  )
}
