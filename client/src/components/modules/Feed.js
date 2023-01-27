import React, { useState, useEffect } from "react";
import {get, post} from "../../utilities.js";

const Feed = (props) => {
    const [messages, setMessages] = ([])

    useEffect(() => get("api/message").then(
       (MessageObjs) => (setMessages(MessageObjs))
       ), [])

    let messagelist = null;
    const hasMessages = messages.length !== 0;
    if (hasMessages) {
        messagelist = messages.map((message) =>
            <NewMessage userMessage={message.text} userColor={message.background} />
        )
    }
    else(
        messagelist = 
        <div>No messages</div>
    )
        
    return(
        <>
            <div>
                {messagelist}
            </div>
        </>
    )
}

export default Feed;