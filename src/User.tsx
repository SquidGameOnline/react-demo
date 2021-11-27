import React from "react";
import {Button} from "react-bootstrap";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
// import * as CounterActions from "./actions/counter";
import * as UserActions from "./actions/user";

const User = (props: any) => {
   // debugger
    // const a = props.userActions;
    console.log(props.user)
    return (
        <>
            <div>
                <h1>
                    User
                </h1>
                <h2>
                    {JSON.stringify(props.user)}
                </h2>
                <div>
                    <Button variant="warning" onClick = {() => props.userActions.addUser() }>Add User</Button>
                </div>
            </div>
        </>
    )
};

export default connect((state: any) => {
    return {
        user: state.user
    }
},(dispatch) => {
    return {
        userActions: bindActionCreators(UserActions, dispatch)
    }
})(User);