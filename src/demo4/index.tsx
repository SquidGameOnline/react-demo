import React from "react";

const withFetch = (Comp: any) => {
    return class extends React.Component<any, any> {
        render() {
            return (
                <Comp {...this.props}/>
            );
        }
    }
}

class MyData extends React.Component<any, any>  {
    render() {
        return (
            <div>
                MyData: {this.props.data}
            </div>
        );
    }
}

const WithFetch = withFetch(MyData);

export default class Demo4  extends  React.Component<any, any>{
    render() {
        return (
            <div>
                <WithFetch data = {" 可我忘了 "} />
            </div>
        );
    }
}