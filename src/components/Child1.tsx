import React, {useEffect, useState} from "react";


const Child1 = () => {

    console.log("child1 -> render");

    return(
        <div>
            Hello
            <br/>
            <h1>
                Child1
            </h1>
        </div>
    )
}

export default  Child1;