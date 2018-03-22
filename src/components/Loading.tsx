import * as React from "react";

export const Loading: React.SFC<any> = (): JSX.Element => (
    <svg
        width="40px"
        height="40px"
        viewBox="0 0 50 50"
    >
        <path
            fill="rgba(0, 0, 255, 0.8)"
            d="M25.251,6.461c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615V6.461z"
            transform="rotate(100 25 25)"
        >
            <animateTransform
                attributeType="xml"
                attributeName="transform"
                type="rotate"
                from="0 25 25"
                to="360 25 25"
                dur="0.6s"
                repeatCount="indefinite"
            />
        </path>
    </svg>  
);
