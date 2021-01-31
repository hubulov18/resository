export const addMessageActionCreator = (text) => {
    return({type:"ADD_MESSAGE", text:text})
}
export const updateNewMessageTextActionCreator = (text) =>{
    return({type:'UPDATE_NEW_MESSAGE_TEXT',  text:text})
}

const ADD_MESSAGE = 'ADD_MESSAGE'
const CREATE_NEW_MESSAGE_TEXT = 'CREATE_NEW_MESSAGE_TEXT'

let initialState={
    dialogsData: [
        {id: 1, name: "Alex"},
        {id: 2, name: "Vadim"},
        {id: 3, name: "Jack"},
        {id: 4, name: "Simon"},
        {id: 5, name: "Zein"},
    ],
        messagesData: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'I am fine'},
        {id: 4, message: 'Hi'},
        {id: 5, message: 'Hi'},
        {id: 6, message: 'Hi'},
    ],
        newMessageText:"",

}
const dialogsReducer = (state=initialState, action) =>{
    switch (action.type) {
        case ADD_MESSAGE: {
            this.state.messagesData.push({id:3,message:this.state.dialogsPage.newMessageText})
            break
        }
        case CREATE_NEW_MESSAGE_TEXT:{
            this.state.dialogsPage.newMessageText=action.text
        }
    }
    return state;

}
export default dialogsReducer;