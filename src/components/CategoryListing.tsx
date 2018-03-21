import * as React from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import { Error } from "./Error";
import { Loading } from "./Loading";
import { Empty } from "./Empty";
import { orderedKeys } from "../data";

interface IState {
    categories: string[] | null;
    errorMessage: string | null;
}

class CategoryListing extends React.Component<any, IState> {
    constructor(props: any) {
        super(props);

        this.state = {
            categories: null,
            errorMessage: null
        };
    }

    public componentDidMount(): void {
        orderedKeys("categories")
            .then((categories) => this.setState({ categories }))
            .catch((error) => this.setState({ errorMessage: error.message }));
    }

    public render(): JSX.Element {
        const { categories, errorMessage } = this.state;

        if (errorMessage) {
            return <Error message={errorMessage} />;
        }
        if (!categories) {
            return <Loading />;
        }
        if (!categories.length) {
            return <Empty />;
        }
        return (
           <div>
               Categories
               {this.renderCategories(categories)}
            </div>
        );
    }

    private renderCategories(categories: string[]): JSX.Element[] {
        return categories.map((category: string, index: number) => (
            <Link key={index} to={`/${category}`}>{category}</Link>
        ));
    }
}

export default withRouter(CategoryListing);