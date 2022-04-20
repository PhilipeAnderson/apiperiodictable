import styles from './documentation.module.scss';



export default function Documentation() {
  return(
    <main className={styles.container}>
      <aside className={styles.sideBar}>
        <h2>Documentation</h2>
        <div>
          <h3>Getting Started</h3>
            <ul>
              <li>
                <a href="#">Installation</a>
              </li>
              <li>
                <a href="#">Overview</a>
              </li>
              <li>
                <a href="#">Tutorial</a>
              </li>
              <li>
                <a href="#">Main Concepts</a>
              </li>
            </ul>
        </div>

        <div>
          <h3>FAQS</h3>
            <ul>
              <li>
                <a href="#">Questions</a>
              </li>
              <li>
                <a href="#">Answers</a>
              </li>
            </ul>
        </div>

        <div>
          <h3>Examples</h3>
            <ul>
              <li>
                <a href="#">Basic</a>
              </li>
              <li>
                <a href="#">Fetch</a>
              </li>
              <li>
                <a href="#">Axios</a>
              </li>
              <li>
                <a href="#">Use State</a>
              </li>
              <li>
                <a href="#">Use Effects</a>
              </li>
              <li>
                <a href="#">Method Map</a>
              </li>
              <li>
                <a href="#">Spinner</a>
              </li>
            </ul>
        </div>

        <div>
          <h3>Colaboration</h3>
            <ul>
              <li>
                <a href="#">Buy Me a Coffee</a>
              </li>              
            </ul>
        </div>

        <div>
          <h3>Community</h3>
            <ul>
              <li>
                <a href="#">Discord</a>
              </li>
              <li>
                <a href="#">LinkedIn</a>
              </li>
              <li>
                <a href="#">GitHub</a>
              </li>
            </ul>
        </div>

        <div>
          <h3>Make new filters</h3>
            <ul>
              <li>
                <a href="#">Filter</a>
              </li>
              <li>
                <a href="#">Reduce</a>
              </li>
              <li>
                <a href="#">Some</a>
              </li>
              <li>
                <a href="#">Includes</a>
              </li>
            </ul>
        </div>

        <div>
          <h3>Class</h3>
            <ul>
              <li>
                <a href="#">Rodiative</a>
              </li>
              <li>
                <a href="#">Metal</a>
              </li>
              <li>
                <a href="#">Non Metal</a>
              </li>
              <li>
                <a href="#">Noble Gas</a>
              </li>
            </ul>
        </div>

        <div>
          <h3>Getting Started</h3>
            <ul>
              <li>
                <a href="#">Installation</a>
              </li>
              <li>
                <a href="#">Overview</a>
              </li>
              <li>
                <a href="#">Tutorial</a>
              </li>
              <li>
                <a href="#">Main Concepts</a>
              </li>
            </ul>
        </div>

        <div>
          <h3>Getting Started</h3>
            <ul>
              <li>
                <a href="#">Installation</a>
              </li>
              <li>
                <a href="#">Overview</a>
              </li>
              <li>
                <a href="#">Tutorial</a>
              </li>
              <li>
                <a href="#">Main Concepts</a>
              </li>
            </ul>
        </div>

        <div>
          <h3>Getting Started</h3>
            <ul>
              <li>
                <a href="#">Installation</a>
              </li>
              <li>
                <a href="#">Overview</a>
              </li>
              <li>
                <a href="#">Tutorial</a>
              </li>
              <li>
                <a href="#">Main Concepts</a>
              </li>
            </ul>
        </div>
      </aside>
      <section className={styles.content}>
        <h1>Installation</h1>
          <p>For use the Periodic Table API is very simple.</p>
      </section>
    </main>
  )
}