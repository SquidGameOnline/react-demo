import React, {Component} from 'react';
import {Button} from "react-bootstrap";
import Error from "./Error";
import ErrorWrapper from "../components/ErrorWrapper";
export default class ErrorContainer extends Component {
    // constructor(props: any) {
        // super(props);
        // this.state = {
        //     count: 0
        // };
    // }

    state = {
        count: 0,
        hasError: false,
        error: null,
        errorInfo: null
    }

    inc = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    dec = () => {
        this.setState({
            count: this.state.count - 1
        })
    }


    render() {
        return (
            <>
                <h1>
                    我是错误组件的父亲组件 {this.state.count}
                </h1>
                <br/>
                <Button variant={"primary"} onClick = {this.inc}>
                     增加
                </Button>
                <br/>
                <Button variant={"warning"} onClick = {this.dec}>
                     减少
                </Button>

                <br/>

                <ErrorWrapper render = { (error: any, errorInfo: any) => <div><span>Error子组件发生异常</span></div> }>
                    <Error />
                </ErrorWrapper>

            </>
        )
    }
} 
