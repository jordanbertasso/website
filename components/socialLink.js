import Document from "next/document";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./socials.module.css";

export default class SocialLink extends Document {
    render() {
        return (
            <div>
                <a href={this.props.link} target="blank">
                    <FontAwesomeIcon
                        icon={this.props.icon}
                        className={styles.socialItem}
                    />
                </a>
            </div>
        );
    }
}
