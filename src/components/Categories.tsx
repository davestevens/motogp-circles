import * as React from "react";
import { Link } from "react-router-dom";

interface IProps {
    baseUrl: string;
    items?: string[];
}

export const Categories: React.SFC<IProps> = ({ baseUrl, items }): JSX.Element => (
    <div className="listing">
        <div className="listing__title">Categories</div>
        <ul className="listing__items">
            {
                items && items.map((category: string, index: number) => (
                    <li key={index}>
                        <Link to={`${baseUrl}${category}`}>{category}</Link>
                    </li>
                ))
            }
        </ul>
    </div>
);
