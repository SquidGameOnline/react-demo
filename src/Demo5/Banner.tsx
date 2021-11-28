import React from "react";
import WithFetch from "./WithFetch";

const Banner = WithFetch("http://iwenwiki.com/api/blueberrypai/getIndexBanner.php")(
    (props: any) => {
        const banner = props.data.banner;
        return (
            <div>
                    <ul>
                        {
                            banner.map((item: any) => {
                                console.log(item)
                                return <li key={item}> {item.title} </li>
                            })
                        }
                    </ul>
            </div>
        )
    }
);

export {Banner};
