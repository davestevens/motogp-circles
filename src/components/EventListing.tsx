import * as React from "react";
import { withRouter } from "react-router";
import { ListingWrapper } from "./ListingWrapper";
import { Events } from "./Events";

export class EventListing extends React.Component<any> {
    public render(): JSX.Element {
        const { match: { params: { category } } } = this.props;
        const location = `events/${ category }`;
        const baseUrl = `/${category}/`;

        return (
            <ListingWrapper location={location}>
                <Events baseUrl={baseUrl} />
            </ListingWrapper>
        );
    }
}

export default withRouter(EventListing);
