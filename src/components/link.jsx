import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class Link extends Component {
    render() {
        return (
            <div>
                <a href={this.props.link} target="blank">
                    <FontAwesomeIcon
                        icon={this.props.icon}
                        className="social-item"
                    />
                </a>
            </div>
        );
    }
}
