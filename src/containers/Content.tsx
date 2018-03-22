import * as React from "react";
import { Route } from "react-router-dom";
import CategoryListing from "../components/CategoryListing";
import EventListing from "../components/EventListing";
import SessionListing from "../components/SessionListing";
import Session from "../components/Session";
import "./Content.css";

export const Content: React.SFC<{}> = (): JSX.Element => (
    <section>
        <Route exact={true} path="/" component={CategoryListing} />
        <Route exact={true} path="/:category" component={EventListing} />
        <Route exact={true} path="/:category/:event" component={SessionListing} />
        <Route exact={true} path="/:category/:event/:session" component={Session} />
    </section>
);
