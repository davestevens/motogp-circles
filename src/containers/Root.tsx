import * as React from "react";
import { Provider } from "react-redux";
import { HashRouter, Route } from "react-router-dom";

const Home: React.SFC<void> = () => {
    return (
        <div>Home</div>
    );
};

interface IRoot {
    store: any;
}

export const Root: React.SFC<IRoot> = ({ store }) => (
  <Provider store={store}>
    <HashRouter>
        <Route exact={true} path="/" component={Home} />
    </HashRouter>
  </Provider>
);
