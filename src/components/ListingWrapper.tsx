import * as React from "react";
import { Error } from "./Error";
import { Loading } from "./Loading";
import { Empty } from "./Empty";
import { orderedKeys } from "../data";
import "./Listing.css";

interface IProps {
    children: React.ReactElement<any>;
    location: string;
}

interface IState {
    errorMessage: string | null;
    items: any[] | null;
}

export  class ListingWrapper extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);

        this.state = {
            errorMessage: null,
            items: null,
        };
    }

    public componentDidMount(): void {
        const { location } = this.props;
        orderedKeys(location)
            .then((items) => this.setState({ items }))
            .catch((error) => this.setState({ errorMessage: error.message }));
    }

    public render(): JSX.Element {
        const { errorMessage, items } = this.state;

        if (errorMessage) {
            return <Error message={errorMessage} />;
        }
        if (!items) {
            return <Loading />;
        }
        if (!items.length) {
            return <Empty />;
        }

        const { children } = this.props;
        return React.cloneElement(children, { items });
    }
}
