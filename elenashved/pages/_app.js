import Header from "../components/Header/Header";
import SideMenu from "../components/SideMenu/SideMenu";
import "../styles/globals.scss";
import styles from "../styles/Overlay.module.scss";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <div className={styles.content__holder}>
        <SideMenu />
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
