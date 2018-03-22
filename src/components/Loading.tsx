import * as React from "react";
import "./Loading.css";

export const Loading: React.SFC<any> = () => (
    <div className="lds-ring">
        <div />
        <div />
        <div />
        <div />
    </div>    
);
