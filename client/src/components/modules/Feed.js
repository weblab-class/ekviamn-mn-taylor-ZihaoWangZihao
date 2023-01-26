import React, { useState, useEffect } from "react";
import {get, post} from "../../utilities.js";

const Feed = (props) => {
    const [messages, setMessages] = ([])

    //useEffect(() => get("api/message").then(
    //    (MessageObjs) => (setMessages(MessageObjs))
    //    ), [])

    let messagelist = null;
    const hasMessages = messages.length !== 0;
    if (hasMessages) {
        messageList = messages.map((message) =>
            <NewMessage userMessage={message.text} userColor={message.background} />
        )
    }
    else(
        messageList = 
        <div>No messages</div>
    )
        
    return(
        <>
            <div>
                Feed goes here!
            </div>
        </>
    )
}

export default Feed;