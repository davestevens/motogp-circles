import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import CategoryListing from "./components/CategoryListing";
import EventListing from "./components/EventListing";
import SessionListing from "./components/SessionListing";
import Session from "./components/Session";

ReactDOM.render(
    <BrowserRouter>
        <div>
            <div>Header</div>                        
            <div>
                <Route exact={true} path="/" component={CategoryListing} />
                <Route exact={true} path="/:category" component={EventListing} />
                <Route exact={true} path="/:category/:event" component={SessionListing} />
                <Route exact={true} path="/:category/:event/:session" component={Session} />
            </div>
        </div>
    </BrowserRouter>,
    document.getElementById("root")
);
