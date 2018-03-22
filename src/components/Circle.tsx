import * as React from "react";
import "./Circle.css";

export interface IDatum {
    color: string;
    diff: number;
    label: string;
}

interface ICircle {
    data: IDatum[];
}

const CENTER_SIZE = 20;
const RADIUS_INCREMENT = 20;
const CIRCLE_STROKE_WIDTH = 16;
const FONT_SIZE = CIRCLE_STROKE_WIDTH;
const MARGIN = FONT_SIZE;
const DELAY = 2;

export class Circle extends React.Component<ICircle> {
    private svg: SVGSVGElement;
    private circles: SVGCircleElement[] = [];
    private labels: SVGTextElement[] = [];

    public componentDidMount() {
        this.svg.getBoundingClientRect();
        this.circles.forEach((circle) => {
            const duration = circle.getAttribute("data-transition-duration");
            const dashoffset = circle.getAttribute("data-dashoffset");
            circle.style.transitionDuration = `${duration}s`;
            circle.setAttribute("stroke-dashoffset", `${dashoffset}`);
        });
        this.labels.forEach((label) => {
            const delay = label.getAttribute("data-transition-delay");
            label.style.transitionDelay = `${delay}s`;
            label.style.opacity = "1";
        });
    }

    public render(): JSX.Element {
        const { data } = this.props;
        const count = data.length;
        const size = (((count * RADIUS_INCREMENT) * 2) + CIRCLE_STROKE_WIDTH) + MARGIN;

        return (
            <svg
                viewBox={`0 0 ${size} ${size}`}
                width={`${size}px`}
                height={`${size}px`}
                ref={(svg: SVGSVGElement) => this.svg = svg}
            >
                 {
                     data
                     .sort((a, b) => a.diff < b.diff ? -1 : 1)
                     .map((datum, index) => [
                        this.createCircle(datum, index, size),
                        this.createLabel(datum, index, size)
                     ])
                 }
            </svg>
        );
    }

    private createCircle(datum: IDatum, index: number, size: number): JSX.Element {
        const radius = (RADIUS_INCREMENT * index) + CENTER_SIZE;
        const circumference = 2 * radius * Math.PI;
    
        return (
            <circle
                key={`circle-${index}`}
                cx={`${size / 2}px`}
                cy={`${size / 2}px`}
                r={`${radius}px`}
                fill="transparent"
                strokeWidth={`${CIRCLE_STROKE_WIDTH}px`}
                stroke={datum.color}
                strokeDasharray={`${circumference}px`}
                strokeDashoffset={`${circumference}px`}
                data-transition-duration={DELAY + datum.diff}
                data-dashoffset={`${circumference * 1.75}px`}
                ref={(circle: SVGCircleElement) => this.circles.push(circle)}
            />
        );
    }

    private createLabel(datum: IDatum, index: number, size: number): JSX.Element {
        const x = (size / 2) + (CENTER_SIZE / 2);
        const y = (size / 2) + (FONT_SIZE / 2) + ((index + 1) * RADIUS_INCREMENT);

        return (
            <text
                key={`text-${index}`}
                x={`${x}px`}
                y={`${y}px`}
                fontSize={`${FONT_SIZE}px`}
                data-transition-delay={DELAY + datum.diff}
                ref={(label: SVGTextElement) => this.labels.push(label)}
            >
                {datum.label}
            </text>
        );
    }
}
