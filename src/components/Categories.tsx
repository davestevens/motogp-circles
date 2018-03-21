import * as React from "react";
import { Link } from "react-router-dom";

interface IProps {
    baseUrl: string;
    items?: string[];
}

export class Categories extends React.Component<IProps> {
    public render(): JSX.Element {
        const { items } = this.props;
        return (
            <div>
                <div>Categories</div>
                <ul>{this.renderCategories(items)}</ul>
            </div>
        );
    }

    private renderCategories(categories: string[] = []): JSX.Element[] {
        const { baseUrl } = this.props;
        return categories.map((category: string, index: number) => (
            <li key={index}>
                <Link to={`${baseUrl}${category}`}>{category}</Link>
            </li>
        ));
    }
}
