import * as React from "react";
import { withRouter } from "react-router";
import { Error } from "./Error";
import { Loading } from "./Loading";
import { Empty } from "./Empty";
import { value } from "../data";

interface IState {
    category: string | null;
    errorMessage: string | null;
    event: string | null;
    session: string | null;
    times: any;
}

class Session extends React.Component<any, IState> {
    constructor(props: any) {
        super(props);

        this.state = {
            category: null,
            errorMessage: null,
            event: null,
            session: null,
            times: null
        };
    }

    public componentWillMount(): void {
        const { match: { params: { category, event, session } } } = this.props;
        this.setState({ category, event, session });
    }

    public componentDidMount(): void {
        const { category, event, session } = this.state;
        value(`times/${ category }/events/${ event }/sessions/${ session }`)
            .then((times) => this.setState({ times }))
            .catch((error) => this.setState({ errorMessage: error.message }));
    }

    public render(): JSX.Element {
        const { errorMessage, times } = this.state;

        if (errorMessage) {
            return <Error message={errorMessage} />;
        }
        if (!times) {
            return <Loading />;
        }
        if (!Object.keys(times).length) {
            return <Empty />;
        }
        return (
           <div>
                Times
            </div>
        );
    }
}

export default withRouter(Session);