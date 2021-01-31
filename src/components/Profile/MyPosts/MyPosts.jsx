import React from 'react'
import s from './MyPosts.module.css'
import Post from '../MyPosts/Post/Post'
import {addPostActionCreator, updateNewPostActionCreator} from "../../../Redux/profileReducer";

const MyPosts = (props) => {
    debugger
    let postsElements = props.posts.map(item => <Post message={item.message} likes={item.likesCount}/>);
    let newPostElement= React.createRef();

    let addPost = () =>{
        console.log("hren s maslom")
       let  text=newPostElement.current.value
            props.addpost()
        newPostElement.current.value='';
    }
    let onPostChange= () =>{
        let text=newPostElement.current.value;
        props.updateNewPostText(text)
    }

    return(
        <div className={s.postsBlock}>
            MyPosts
            <div>
                <div>
                <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}></textarea>
                </div>
                <div>
                <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;