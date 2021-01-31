import React from 'react'
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import {addMessageActionCreator} from "../../Redux/dialogsReducer";
import {updateNewMessageTextActionCreator} from "../../Redux/dialogsReducer";
import Dialogs from "./Dialogs";
import storeContext from "../../StoreContext";

const DialogsContainer = () => {


    return(
        <storeContext.Consumer>
            {
                (store) =>{
                    let state=store.getState().dialogsPage
                    let changeMessageText = (m) =>{
                        store.dispatch(updateNewMessageTextActionCreator(m))

                    }
                    let sendContent =() => {
                        store.dispatch(addMessageActionCreator())
                        ;
                    }

                    return <Dialogs updateMessageText={changeMessageText}
                    sendMessage={sendContent}
                    messages={state}/>

                }
            }
        </storeContext.Consumer>
    )
}
export default DialogsContainer
