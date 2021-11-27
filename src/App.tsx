import React from 'react'
import { Button} from "react-bootstrap";
import { connect } from "react-redux";
// import { inc, dec} from './actions/counter'
import * as CounterActions from './actions/counter'
import * as UserActions from './actions/user'
import {bindActionCreators} from "redux";
// import counter from "./counter";

const App = (props: any) => {
    // const {inc,dec} = props;
  return (
      <>
        <div style={{textAlign: 'center'}}>
        <span style={{color:'red', fontSize: 'x-large', textAlign: 'center'}}>
            {props.counter}
            <br/>
        </span>
        </div>
        <div style={{textAlign: 'center'}}>

        <Button variant="primary" onClick = {() => props.counterActions.inc(5) }>inc</Button> &nbsp;
        <Button variant="warning" onClick = {() => props.counterActions.dec(8) }>dec</Button>
        </div>

      </>
  );
}

export default connect((state: any) => {
    return {
        counter: state.counter,
    }
},(dispatch) => {
    return {
        counterActions: bindActionCreators(CounterActions, dispatch),
    }
})(App);