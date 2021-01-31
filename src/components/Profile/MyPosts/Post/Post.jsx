import React from 'react'

const Post = (props) =>
{
    return(
        <div>
        <img src='https://sun9-70.userapi.com/impg/c206720/v206720556/179882/7cWU9Goz-sk.jpg?size=50x0&quality=90&crop=0,0,1319,1319&sign=cbec4788b4d384b3c9b8172dbbd554e0&ava=1'></img>
        {props.message} 
        <div>
        {props.likes} likes
        </div>
        </div>
    )
}
export default Post;