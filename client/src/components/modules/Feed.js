import React, { useState, useEffect } from "react";
import {get, post} from "../../utilities.js";

const Feed = (props) => {
    const [messages, setMessages] = ([])

    //useEffect(() => get("api/message").then(
    //    (MessageObjs) => (setMessages(MessageObjs))
    //    ), [])


        
    return(
        <>
            <div>
                Feed goes here!
            </div>
        </>
    )
}

export default Feed;