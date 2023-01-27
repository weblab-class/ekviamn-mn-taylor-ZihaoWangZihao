import React, { useState, useEffect } from "react";
import {get, post} from "../../utilities.js";
import NewMessage from "./NewMessage.js"

const Feed = (props) => {
    const [messages, setMessages] = useState([]);

    useEffect(() => {get("/api/message").then((MessageObjs) => (setMessages(MessageObjs)))}, [])

    let messagelist = null;
    const hasMessages = (messages.length !== 0);
    if (hasMessages && props.filter) {
        messagelist = messages.filter(message.userID == props.creatorID).map((message) =>
            <NewMessage userMessage={message.text} userColor={message.background} />
        )
    }
    else if(hasMessages) {
        messagelist = messages.map((message) =>
            <NewMessage userMessage={message.text} userColor={message.background} />
        )
    }else{
        messagelist = <div>No messages</div>
    }
            
    return(
        <>
            <div>{messagelist}</div>
        </>
    );
};

export default Feed;