import styles from "../styles/socials.module.css";
import SocialLink from "./socialLink";

import {
    faLinkedin,
    faGithub,
    faTwitter,
    faFontAwesomeFlag,
} from "@fortawesome/free-brands-svg-icons";

export default function Socials() {
    return (
        <div className={styles.socialsOuter}>
            <div className={styles.socialsGrid}>
                <SocialLink
                    link="https://www.linkedin.com/in/jordanbertasso/"
                    icon={faLinkedin}
                ></SocialLink>
                <SocialLink
                    link="https://github.com/jordanbertasso"
                    icon={faGithub}
                ></SocialLink>
                <SocialLink
                    link="https://twitter.com/jordanbertasso"
                    icon={faTwitter}
                ></SocialLink>
                <SocialLink
                    link="https://downunderctf.com/"
                    icon={faFontAwesomeFlag}
                ></SocialLink>
            </div>
        </div>
    );
}
