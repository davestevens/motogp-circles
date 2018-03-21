import * as React from "react";
import { withRouter } from "react-router";
import { ListingWrapper } from "./ListingWrapper";
import { Events } from "./Events";

export class SessionListing extends React.Component<any> {
    public render(): JSX.Element {
        const { match: { params: { category, event } } } = this.props;
        const location = `sessions/${ category }/${ event }`;
        const baseUrl = `/${category}/${event}/`;

        return (
            <ListingWrapper location={location}>
                <Events baseUrl={baseUrl} />
            </ListingWrapper>
        );
    }
}

export default withRouter(SessionListing);
