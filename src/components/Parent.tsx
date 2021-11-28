import React, {useEffect, useState} from "react";
import Child1 from "./Child1";
/**
 * count
 * @constructor
 */

const that: any  = {};

const MyApi = {
    count: 0,
    subscribe(cb: any) {
         that.setIntervalId =  setInterval(() => {
            this.count += 1;
            cb(this.count);
        }, 1000)
    },
    unsubscribe(){
        console.log("I AM INVOKED!@")
        clearInterval(that.setIntervalId);
        this.reset();
    },
    reset(){
        this.count = 0;
    }

}

const Parent = (props: any) => {

    const [count, setCount] = useState(0);

    useEffect(() => {
        MyApi.subscribe((cur: number) => {
            setCount(cur);
        });
        // return MyApi.unsubscribe;
    },[]);
    console.log("parent -> render");
    return (
        <div>
            Hello
            <br/>
            <h1>
                {count}
                <Child1 />
            </h1>
        </div>
    )
}

export default  Parent;