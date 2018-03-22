import * as React from "react";
import { withRouter, RouteComponentProps } from "react-router";
import { ListingWrapper } from "./ListingWrapper";
import { Sessions } from "./Sessions";

interface ISessionListing {
    category: string;
    event: string;
}

const SessionListing: React.SFC<RouteComponentProps<ISessionListing>> = (
    { match: { params: { category, event } } }
): JSX.Element => (
    <ListingWrapper location={`sessions/${ category }/${ event }`}>
        <Sessions baseUrl={`/${category}/${event}/`} />
    </ListingWrapper>
);

export default withRouter(SessionListing);
