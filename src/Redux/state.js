import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
let store = {
    _state: {
        dialogsPage: {
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

        },
        profilePage: {
            postsData: [
                {id: 1, message: 'Hi', likesCount: 12},
                {id: 2, message: 'How are you?', likesCount: 14},
                {id: 3, message: 'I am fine', likesCount: 34},
                {id: 4, message: 'Hi', likesCount: 34},
                {id: 5, message: 'Hi', likesCount: 43},
                {id: 6, message: 'Hi', likesCount: 23},
            ],
            newPostText: 'it-kamasutra.com'
        }
    },
    getState (){
        return(this._state)
    },
    rerenderEntireTree() {
        console.log("Hello!")
    },
    subscribe(observer) {
        this.rerenderEntireTree = observer
    },
    dispatch (action){

        this._state.profilePage=profileReducer(this._state.profilePage, action)
        this._state.dialogsPage=dialogsReducer(this._state.dialogsPage, action)
        this.rerenderEntireTree()
    }
}

/*ActionCreators*/


export default store;