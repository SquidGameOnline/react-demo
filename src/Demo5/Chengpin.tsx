import React from "react";
import WithFetch from "./WithFetch";

const Chengpin = WithFetch("http://iwenwiki.com/api/blueberrypai/getChengpinInfo.php")(
    (props: any) => {
        const chengpinInfo = props.data.chengpinInfo;
        return (
            <div>
                <p>
                   <ul>
                       {
                           chengpinInfo.map((item: any) => {
                               return ( <li key = {item}> {item.content}</li>)

                           })
                       }
                   </ul>
                </p>
            </div>
        )
    }
);

export {Chengpin};
