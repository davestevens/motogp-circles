import * as React from "react";
import * as ReactDOM from "react-dom";
import { Root } from "./containers/Root";
import store from "./stores/configureStore";

ReactDOM.render(
    <Root store={store} />,
    document.getElementById("root")
);
