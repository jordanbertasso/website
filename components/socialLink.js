import Document from "next/document";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../styles/socials.module.css";

export default class SocialLink extends Document {
    render() {
        return (
            <div>
                <a style={{fontSize: 0}} href={this.props.link} target="blank">
                    {this.props.link}
                    <FontAwesomeIcon
                        icon={this.props.icon}
                        className={styles.socialItem}
                    />
                </a>
            </div>
        );
    }
}
