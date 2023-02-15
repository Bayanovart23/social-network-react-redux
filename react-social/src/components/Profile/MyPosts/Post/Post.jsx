import React from "react";
import classes from "../Post/Post.module.css";


const Post = (props) => {
    return (
        <div className={classes.item}>
            <img
                src='https://img.freepik.com/free-psd/3d-illustration-of-person-with-sunglasses_23-2149436188.jpg?w=2000' alt={'logo'}/>
            {props.message}
            <div>
                <span>Like {props.likesQty}</span>
            </div>
        </div>
    );
}
export default Post;