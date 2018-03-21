import * as React from "react";
import { Link } from "react-router-dom";

interface IProps {
    baseUrl: string;
    items?: string[];
}

export const Events: React.SFC<IProps> = ({ baseUrl, items }): JSX.Element => (
    <div>
        <div>Events</div>
        <ul>
            {
                items && items.map((event: string, index: number) => (
                    <li key={index}>
                        <Link to={`${baseUrl}${event}`}>{event}</Link>
                    </li>
                ))
            }
        </ul>
    </div>
);
