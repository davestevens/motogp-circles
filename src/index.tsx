import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Navigation } from "./containers/Navigation";
import { Content } from "./containers/Content";
import "./index.css";

ReactDOM.render(
    <BrowserRouter>
        <div className="wrapper">
            <Navigation />              
            <Content />
        </div>
    </BrowserRouter>,
    document.getElementById("root")
);
