import React, { Component } from "react";
import {
    faLinkedin,
    faGithub,
    faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import Link from "./link";

export default class Links extends Component {
    render() {
        return (
            <div className="linksOuter">
                <div className="socials-grid">
                    <Link
                        link="https://www.linkedin.com/in/jordanbertasso/"
                        icon={faLinkedin}
                    ></Link>
                    <Link
                        link="https://github.com/jordanbertasso"
                        icon={faGithub}
                    ></Link>
                    <Link
                        link="https://twitter.com/jordanbertasso"
                        icon={faTwitter}
                    ></Link>
                </div>
            </div>
        );
    }
}
