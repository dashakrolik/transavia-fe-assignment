import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function IndexPage() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Transavia app</title>
        <meta name="description" content="Find Transavia flights" />
      </Head>

      <main className={styles.main}>
        <h1 data-testid="h1" className={styles.title}>
          Find <a data-testid="link-to-transavia-website" className='color-green' href="https://transavia.com">Transavia</a> flights
        </h1>
        <div className={styles.grid}>
          <Link data-testid="link-to-form" href="/form" className={styles.card}>
            <h2 data-testid="h2-proceed">Click here to proceed</h2>
            <Image data-testid="image-transavia-logo" src="/transavia-logo.svg" alt="Transavia Logo" width={150} height={50} />
          </Link>
        </div>
      </main>
    </div>
  )
}
