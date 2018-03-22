import * as React from "react";
import { Link } from "react-router-dom";

interface IProps {
    baseUrl: string;
    items?: string[];
}

export const Sessions: React.SFC<IProps> = ({ baseUrl, items }): JSX.Element => (
    <div className="listing">
        <div className="listing__title">Sessions</div>
        <ul className="listing__items">
            {
                items && items.map((session: string, index: number) => (
                    <li key={index}>
                        <Link to={`${baseUrl}${session}`}>{session}</Link>
                    </li>
                ))
            }
        </ul>
    </div>
);