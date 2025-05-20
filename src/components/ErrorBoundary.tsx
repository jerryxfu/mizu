import React, {Component, type ErrorInfo, type ReactNode} from "react";

interface ErrorBoundaryProps {
    children: ReactNode;
}

interface ErrorBoundaryState {
    hasError: boolean;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = {hasError: false};
    }

    static getDerivedStateFromError(_: Error): ErrorBoundaryState {
        return {hasError: true};
    }

    override componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error("Uncaught error:", error, errorInfo);
    }

    override render() {
        if (this.state.hasError) {
            return (
                <div style={{height: "100vh", width: "100vw"}}>
                    <div className="blink_animation" style={{position: "absolute", height: "100%", width: "100%", backgroundColor: "red"}} />
                    <div style={{position: "absolute"}}>
                        <h1>Something went wrong and it's probably your fault.</h1>
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;