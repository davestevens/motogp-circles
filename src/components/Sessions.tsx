import * as React from "react";
import { Link } from "react-router-dom";

interface IProps {
    baseUrl: string;
    items?: string[];
}

export class Sessions extends React.Component<IProps> {
    public render(): JSX.Element {
        const { items } = this.props;
        return (
            <div>
                <div>Sessions</div>
                <ul>{this.renderSessions(items)}</ul>
            </div>
        );
    }

    private renderSessions(sessions: string[] = []): JSX.Element[] {
        const { baseUrl } = this.props;
        return sessions.map((session: string, index: number) => (
            <li key={index}>
                <Link to={`${baseUrl}${session}`}>{session}</Link>
            </li>
        ));
    }
}
