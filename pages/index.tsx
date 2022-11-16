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
        <h1 className={styles.title}>
          Find <a className='color-green' href="https://transavia.com">Transavia</a> flights
        </h1>
        <div className={styles.grid}>
          <Link href="/form" className={styles.card}>
            <h2>Click here to proceed</h2>
            <Image src="/transavia-logo.svg" alt="Transavia Logo" width={150} height={50} />
          </Link>
        </div>
      </main>

      <footer className={styles.footer}>
        <a href="https://nextjs.org" target="_blank" rel="noopener noreferrer">
          Built with Next.js | Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
