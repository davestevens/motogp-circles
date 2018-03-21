import * as React from "react";

interface IError {
    message: string;
}

export const Error: React.SFC<IError> = ({ message }) => (
    <div>Error: {message}</div>
);
