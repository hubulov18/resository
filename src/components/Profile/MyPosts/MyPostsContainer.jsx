import React from 'react'
import {addPostActionCreator, updateNewPostActionCreator} from "../../../Redux/profileReducer";
import MyPosts from "./MyPosts";
import storeContext from "../../../StoreContext";
const MyPostsContainer = () => {



    return (
        <storeContext.Consumer>{
            (store) => {
                let state=store.getState()

                let addPost = () =>{
                    store.dispatch(addPostActionCreator())
                }
                let onPostChange= (text)=>{
                    let action=updateNewPostActionCreator(text);
                    store.dispatch(action)
                }
                return <MyPosts addpost={addPost}
                         newPostText={state.profilePage.newPostText}
                         updateNewPostText={onPostChange}
                         posts={state.profilePage.postsData}/>}
        }
        </storeContext.Consumer>
    )

}

export default MyPostsContainer;