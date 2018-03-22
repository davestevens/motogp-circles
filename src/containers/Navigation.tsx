import * as React from "react";
import { Link, Route, RouteComponentProps } from "react-router-dom";
import "./Navigation.css";

const Breadcrumb: React.SFC<RouteComponentProps<any>> = ({ match, location }): JSX.Element => (
    <span>
        <li className={match.isExact ? "active" : undefined}>
            <Link to={match.url || ""}>
                {match.params.path}
            </Link>
        </li>
        <Route path={`${match.url}/:path`} component={Breadcrumb} />
    </span>
);

export const Navigation: React.SFC<{}> = (): JSX.Element => (
    <nav>
        <ul>
            <li className="no-separator">
                <Link to="/">All</Link>
            </li>
            <Route path="/:path" component={Breadcrumb} />
        </ul>
    </nav>
);
