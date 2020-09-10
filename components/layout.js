import Head from "next/head";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Socials from "./socials";

const name = "Jordan Bertasso";
export const siteTitle = "Jordan Bertasso";

export default function Layout({ children }) {
    return (
        <div className={styles.container}>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta name="description" content="Jordan Bertasso's website" />
                <meta property="og:image" content="/images/profile.jpg" />
                <meta name="og:title" content={siteTitle} />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>

            <header className={styles.header}>
                <>
                    <img
                        src="/images/avatar.gif"
                        className={`${styles.headerHomeImage} ${utilStyles.borderCircle}`}
                        alt={`${name} avatar`}
                    />
                    <h1 className={utilStyles.heading2Xl}>{name}</h1>
                    <Socials></Socials>
                </>
            </header>
            <main>{children}</main>
        </div>
    );
}
