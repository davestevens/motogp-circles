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
    event: string | null;
    sessions: string[] | null;
}

class SessionListing extends React.Component<any, IState> {
    constructor(props: any) {
        super(props);

        this.state = {
            category: null,
            errorMessage: null,
            event: null,
            sessions: null
        };
    }

    public componentWillMount(): void {
        const { match: { params: { category, event } } } = this.props;
        this.setState({ category, event });
    }

    public componentDidMount(): void {
        const { category, event } = this.state;
        orderedKeys(`sessions/${ category }/${ event }`)
            .then((sessions) => this.setState({ sessions }))
            .catch((error) => this.setState({ errorMessage: error.message }));
    }

    public render(): JSX.Element {
        const { errorMessage, sessions } = this.state;

        if (errorMessage) {
            return <Error message={errorMessage} />;
        }
        if (!sessions) {
            return <Loading />;
        }
        if (!sessions.length) {
            return <Empty />;
        }

        return (
           <div>
               Sessions
               {this.renderSessions(sessions)}
            </div>
        );
    }

    private renderSessions(sessions: string[]): JSX.Element[] {
        const { category, event } = this.state;
        const baseUrl = `/${category}/${event}/`;
        return sessions.map((session: string, index: number) => (
            <Link key={index} to={`${baseUrl}${session}`}>{session}</Link>
        ));
    }
}

export default withRouter(SessionListing);