import React, {useEffect, useState} from "react";
import {
    BrowserRouter as Router,
    Routes, Route
} from "react-router-dom";
import Home from "./components/Home";
import Parent from "./components/Parent";
/**
 * count
 * @constructor
 */



const Hi = () => {

    // @ts-ignore
    // @ts-ignore
    return (
     <Router>
         <Routes>
             <Route path = "/" element = {<Home/>}/>
             <Route path = "/parent" element = {<Parent/>}/>
         </Routes>
     </Router>
    )
}

export default  Hi;