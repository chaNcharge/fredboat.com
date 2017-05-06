import React, { Component } from 'react';
import "./css/App.css";
import logo from "../public/logo.svg";
import Markdown from "./Markdown";

class App extends Component {
    render() {
        return (
            <div>
                <div className="header">
                    <img className="logo" src={logo} alt="Logo"/>
                    <div className="logo-text">FredBoat</div>
                </div>

                <div className="page-body">
                    <div className="table-of-contents">
                        <div className="toc-title">
                            Contents
                        </div>
                    </div>

                    <Markdown name="index"/>
                </div>

            </div>
        )
    }
}

export default App;