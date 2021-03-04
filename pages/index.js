import React, { useState } from 'react'
import SignatureContext from '../SignatureContext';
import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import Form from '../components/Form'
import Signature from '../components/Signature'

export default function Home() {
  const [context, setContext] = useState("default context value");
  return (
    <SignatureContext.Provider value={[context, setContext]}>
      <div className={styles.ax_page_wrapper}>
        <Head>
          <title>Axiom Signature Generator</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.ax_container}>
          <div className={styles.ax_text_block}>
            <h1 className={styles.title}> Axiom Signature Generator</h1>
            <p>The Axiom Email Signature Generator allows you to create your branded email signature in a HTML format. It means that you can have your website address and social media links clicables.</p>
            <p>Please make sure to include the <strong>https://</strong> prefix at the begining of any link.</p>
          </div>

          <section className={styles.columns}>
            <div className={styles.left_column}>
              <Form />
            </div>
            <div className={styles.right_column}>
              <Signature />
            </div>
          </section>
        </main >

        <footer className={styles.footer}>
          <a href="axiom.ca" target="_blank">
            Powered by Axiom Mortgage Solutions
        </a>
        </footer>
      </div >
    </SignatureContext.Provider>
  )
}
