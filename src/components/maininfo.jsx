import React, { Component } from "react";
import Links from "./links";
import Name from "./name";

export default class MainInfo extends Component {
    render() {
        return (
            <div className="main">
                <div>
                    <Name></Name>
                    <Links></Links>
                </div>
            </div>
        );
    }
}
