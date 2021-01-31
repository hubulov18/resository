import React from 'react'
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import {addMessageActionCreator} from "../../Redux/dialogsReducer";
import {updateNewMessageTextActionCreator} from "../../Redux/dialogsReducer";


const Dialogs = (props) =>{



    let newMessage=React.createRef();
    let changeMessageText=() => {
        props.updateMessageText(newMessage.current.value())
    }
    let sendContent=()=>{
        props.sendMessage();
    }

   let dialogsElements =props.dialogsData.map((item) =><DialogItem name={item.name} id={item.id}/>)

    let messagesElements= props.messagesData.map(item => <Message text={item.message}/>)
    return(
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
            <div>
            <textarea ref={newMessage} onChange={changeMessageText}>Enter message</textarea>
                <button onClick={sendContent}>Новое сообщение</button>

            </div>
        </div>
    )
}
export default Dialogs;