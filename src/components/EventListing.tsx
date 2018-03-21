import * as React from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import { Error } from "./Error";
import { Loading } from "./Loading";
import { Empty } from "./Empty";
import { orderedKeys } from "../data";

interface IState {
    category: string | null;
    errorMessage: string | null;
    events: string[] | null;
}

class EventListing extends React.Component<any, IState> {
    constructor(props: any) {
        super(props);

        this.state = {
            category: null,
            errorMessage: null,
            events: null,
        };
    }

    public componentWillMount(): void {
        const { match: { params: { category } } } = this.props;
        this.setState({ category });
    }

    public componentDidMount(): void {
        const { category } = this.state;
        orderedKeys(`events/${ category }`)
            .then((events) => this.setState({ events }))
            .catch((error) => this.setState({ errorMessage: error.message }));
    }

    public render(): JSX.Element {
        const { errorMessage, events } = this.state;

        if (errorMessage) {
            return <Error message={errorMessage} />;
        }
        if (!events) {
            return <Loading />;
        }
        if (!events.length) {
            return <Empty />;
        }
        return (
           <div>
               Events
               {this.renderEvents(events)}
            </div>
        );
    }

    private renderEvents(events: string[]): JSX.Element[] {
        const { category } = this.state;
        const baseUrl = `/${category}/`;
        return events.map((event: string, index: number) => (
            <Link key={index} to={`${baseUrl}${event}`}>{event}</Link>
        ));
    }
}

export default withRouter(EventListing);