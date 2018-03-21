import * as React from "react";
import { withRouter, RouteComponentProps } from "react-router";
import { ListingWrapper } from "./ListingWrapper";
import { Events } from "./Events";

interface IEventListing {
    category: string;
}

const EventListing: React.SFC<RouteComponentProps<IEventListing>> = (
    { match: { params: { category } } }
): JSX.Element => (
    <ListingWrapper location={`events/${ category }`}>
        <Events baseUrl={`/${category}/`} />
    </ListingWrapper>
);

export default withRouter(EventListing);
