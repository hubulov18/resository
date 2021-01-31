export const addPostActionCreator = () => {
    return {type: "ADD_POST"}
}
export const updateNewPostActionCreator = (text) =>{
    return{type:'UPDATE_NEW_POST_TEXT', text:text}
}
const ADD_POST = 'ADD_POST'
const UPDATE_NEW_POST_TEXT='UPDATE_NEW_POST_TEXT'

let initialState={
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
const profileReducer = (state=initialState, action) =>{
    switch (action.type) {
        case ADD_POST: {
            let newItem = {
                id: 7,
                message: state.newPostText,
                likesCount: 131,
            }
            state.postsData.push(newItem)
            state.newPostText = ''
            break

        }
        case UPDATE_NEW_POST_TEXT: {
            state.newPostText = action.text
break
        }
        default:{
           break
        }
    }
    return state;

}
export default profileReducer;