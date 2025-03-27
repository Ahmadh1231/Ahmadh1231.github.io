import Terminal from "../components/Terminal";
import Head from 'next/head';
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Ahmadh Hassan</title>
        <meta name="description" content="Ahmadh Hassan's portfolio website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>
        Ahmadh:$ <span className={styles.help}>type help to start</span>
      </h1>
      <Terminal />
    </div>
  );
}