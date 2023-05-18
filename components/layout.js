import Head from 'next/head';

export default function Layout({ children, home }) {
  return (
      <>
        <Head>
         <link rel="icon" type="image/png" href="/image/logo.png"/>
            <link rel="stylesheet" href="../styles/style.css"/>
            <meta name="viewport" content="initial-scale=1, width=device-width" />

        </Head>
        <main>
            {children}
        </main>
        
        
      </>
  )
}