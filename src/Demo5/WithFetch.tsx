import React from "react";





const WithFetch = ( url: string ) => ( View: any ) => {
    return class extends React.Component<any, any> {
        constructor(props: any) {
            super(props);
            // super();
            this.state = {
                loading: true,
                data: null
            }
        }

        componentDidMount() {
            fetch( url )
                .then( res => res.json() )
                .then( data => {
                    this.setState({
                        loading: false,
                        data: data
                    })
                });
        }


        render() {
                if ( this.state.loading === true ){
                    return (
                        <div>
                            loading.....
                        </div>
                    )
                } else {
                    return (
                        <div>
                            <View data = {this.state.data} />
                        </div>
                    )
                }
        }
    }
};

export default WithFetch;