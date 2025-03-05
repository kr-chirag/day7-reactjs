import React from "react";

export interface CVProps {
    name: string;
    type: "car" | "bike";
}

export class Vehicle extends React.Component<CVProps> {
    constructor(props: CVProps) {
        super(props);
    }
    render(): React.ReactNode {
        return (
            <h3>
                {this.props.name} is a {this.props.type}
            </h3>
        );
    }
}

// interface CBProps extends CVProps {}

export class Bike extends Vehicle {
    render(): React.ReactNode {
        return (
            <>
                {super.render()}
                <h3>bike is good</h3>
            </>
        );
    }
}
