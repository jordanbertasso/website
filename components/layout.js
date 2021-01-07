import styles from "../styles/layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Socials from "./socials";


export default function Layout({ children }) {
    const name = "Jordan Bertasso";

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <video alt={`${name} avatar`} className={`${styles.headerHomeImage} ${utilStyles.borderCircle}`} autoPlay loop muted playsInline>
                    <source src="/images/avatar.webm" type="video/webm" />
                    <source src="/images/avatar.gif" type="video/gif" />
                </video>
                <h1 className={utilStyles.heading2Xl}>{name}</h1>
                <Socials></Socials>
            </header>
            <main>{children}</main>
        </div>
    );
}
