import * as React from "react";
import { Link } from "react-router-dom";

interface IProps {
    baseUrl: string;
    items?: string[];
}

export class Events extends React.Component<IProps> {
    public render(): JSX.Element {
        const { items } = this.props;
        return (
            <div>
                <div>Events</div>
                <ul>{this.renderEvents(items)}</ul>
            </div>
        );
    }

    private renderEvents(events: string[] = []): JSX.Element[] {
        const { baseUrl } = this.props;
        return events.map((event: string, index: number) => (
            <li key={index}>
                <Link to={`${baseUrl}${event}`}>{event}</Link>
            </li>
        ));
    }
}
