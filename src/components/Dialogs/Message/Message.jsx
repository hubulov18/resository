import s from "./Message.module.css";
import React from "react";

const Message = (props) => {
    return (
        <div className={s.dialog}>{props.text}</div>
    )
}
export default Message;