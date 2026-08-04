import Terminal from "../components/Terminal";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <main className={styles.container}>
      <header className={styles.header}>
        <p className={styles.eyebrow}>ahmadh@rutgers:~$</p>
        <h1>Ahmadh Hassan</h1>
        <p className={styles.tagline}>
          Electrical &amp; computer engineering · applied physics · mathematics
        </p>
      </header>
      <Terminal />
      <footer className={styles.footer}>
        <span>Interactive portfolio</span>
        <span>Press <kbd>Tab</kbd> to reach commands</span>
      </footer>
    </main>
  );
}
