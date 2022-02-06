import Header from "../components/Header/Header";
import SideMenu from "../components/SideMenu/SideMenu";
import "../styles/globals.scss";
import styles from "../styles/Overlay.module.scss";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Lexend:wght@300;400;500;600;700&family=Titillium+Web:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header />
      <div className={styles.content__holder}>
        <SideMenu />
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
