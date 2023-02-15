import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";


const MyPosts = (props) => {
    let postsElements = props.posts.map((p, index)=> <Post message={p.message} key={index} likesQty={p.likesCount} id={p.id}/>);
    let addNewMessage = React.createRef();

    let addNewPost = () => {
        props.addNewPost();
    }
    let onPostChange = () => {
        let text = addNewMessage.current.value;
        props.onPostChange(text);
    }


    return (
        <div className={classes.postsBlock}>
            <h2>New posts</h2>
            <div>
                <textarea onChange={onPostChange} value={props.newTextArea} ref={addNewMessage}/>
            </div>
            <div>
                <button onClick={addNewPost}>Add post</button>
            </div>
            <div className={classes.posts}>
                {postsElements}
            </div>
        </div>
    );
}
export default MyPosts;