import Head from "next/head";
import "../styles/globals.css";

// eslint-disable-next-line
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Ethena Nova</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
