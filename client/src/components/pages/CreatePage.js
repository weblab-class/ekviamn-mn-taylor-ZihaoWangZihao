import React, { useState, useEffect } from "react";
import { Router } from "@reach/router";
import jwt_decode from "jwt-decode";
import profile from "../../public/profile.png";
 

/*
const EmojiMenu = (props) => {
    return (
    <>
         <div>
            <h1>Emoji menu</h1>
        </div>
    </>
    );
};
*/

const CreatePage = (props) => {
    return (
    <>
        <div class="u-flexColumn">
            <div class="heading">
                <h1>Create New Message</h1>
            </div>
            <div class="u-flex">
                <div>
                    <InputText/>
                </div>
                <div class="u-flex-justifyCenter">
                    <NewMessage
                        uText = {text}
                        uImage = {image} />
                </div>
            </div>
        </div>
    </>
    );
};

export default CreatePage;
