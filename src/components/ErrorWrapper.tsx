import React from "react";
import Error from "../error/Error";

export default class ErrorWrapper extends React.Component<any, any> {

    state = {
        hasError: false,
        errorInfo: null,
        error: null
    }


    componentDidCatch(error: any, errorInfo: any) {
        this.setState({
            hasError: true,
            error: error.toString(),
            errorInfo: errorInfo.toString()
        })
    }

    render() {
        const { hasError, errorInfo, error } = this.state;

        if (hasError) {
            return (
                <div>
                    { this.props.render(error, errorInfo) }
                </div>
            )
        } else {
            return this.props.children;
        }

    }

}