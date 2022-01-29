import Header from "../components/Header/Header";
import Head from "next/head";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Titillium+Web:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
