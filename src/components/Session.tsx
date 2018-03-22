import * as React from "react";
import { withRouter } from "react-router";
import { Error } from "./Error";
import { Loading } from "./Loading";
import { Empty } from "./Empty";
import { Circle, IDatum } from "./Circle";
import { value } from "../data";

interface IState {
    category: string | null;
    errorMessage: string | null;
    event: string | null;
    session: string | null;
    data: IDatum[] | undefined;
}

interface IRider {
    color: string;
    name: string;
}

interface ITime {
    diff: number;
    value: string;
}

const DEFAULT_RIDER: IRider = {
    color: "grey",
    name: "Unknown"
};

class Session extends React.Component<any, IState> {
    constructor(props: any) {
        super(props);

        this.state = {
            category: null,
            errorMessage: null,
            event: null,
            session: null,
            data: undefined
        };
    }

    public componentWillMount(): void {
        const { match: { params: { category, event, session } } } = this.props;
        this.setState({ category, event, session });
    }

    public componentDidMount(): void {
        const { category, event, session } = this.state;
        Promise.all([
            value(`riders/${ category }`),
            value(`times/${ category }/events/${ event }/sessions/${ session }`)
        ])
            .then(([riders, times]) => this.formatData(riders, times))
            .then((data) => this.setState({ data }))
            .catch((error) => this.setState({ errorMessage: error.message }));
    }

    public render(): JSX.Element {
        const { errorMessage, data } = this.state;

        if (errorMessage) {
            return <Error message={errorMessage} />;
        }
        if (data === undefined) {
            return <Loading />;
        }
        if (!data) {
            return <Empty />;
        }

        return <Circle data={data} />;
    }

    private formatData(riders: IRider[], times: ITime[]): IDatum[] {
        return Object.keys(times).map((key) => {
            const rider = Object.assign({}, DEFAULT_RIDER, riders[key]);
            const time = times[key];
            return {
                color: rider.color,
                diff: time.diff,
                label: `${ time.value } : ${ rider.name }`
            };
        });
    }
}

export default withRouter(Session);