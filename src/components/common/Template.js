import React, {useState} from "react";

export default function Template() {

    const [home, setHome] = useState("item active");
    const [messages, setMessages] = useState("item");
    const [friends, setFriends] = useState("item");


    const click = (type) => {
        if(type === "home"){
            setHome("item active");
            setMessages("item");
            setFriends("item");
        }
        if(type === "messages"){
            setMessages("item active");
            setHome("item");
            setFriends("item");
        }
        if(type === "friends"){
            setFriends("item active");
            setMessages("item");
            setHome("item");
        }
    };

    return (
        <>
            <div className="ui secondary pointing menu">
                <a className={home} onClick={() => click("home")}>
                    Home
                </a>
                <a className={messages} onClick={() => click("messages")}>
                    Messages
                </a>
                <a className={friends} onClick={() => click("friends")}>
                    Friends
                </a>
                <div className="right menu">
                    <a className="ui item">
                        Logout
                    </a>
                </div>
            </div>
        </>
    )
}