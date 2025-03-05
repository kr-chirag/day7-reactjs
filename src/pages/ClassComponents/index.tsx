import React from "react";
import { Bike, Vehicle } from "./Vehicles";

class ClassComponents extends React.Component<unknown> {
    color: string;
    state: Readonly<{ bg: string }>;
    constructor(props: unknown) {
        super(props);
        this.color = "red";
        this.state = { bg: "green" };
    }
    componentDidMount(): void {
        setInterval(() => {
            this.setState({ bg: "blue" });
        }, 3000);
    }
    render(): React.ReactNode {
        return (
            <>
                <h1 style={{ color: this.color, background: this.state.bg }}>
                    Class comp
                </h1>
                <Vehicle name="Maruti" type="car" />
                <Bike name="Splender" type="bike" />
            </>
        );
    }
}

export default ClassComponents;
