import React from "react";
import classes from "../../Dialogs/Dialogs.module.css";
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = './dialogs/'+props.id;
    return (
        <div className={classes.dialogsItem}>
            <NavLink to={path}
                     className={navData => navData.isActive ? classes.active : classes.mesItem}>{props.name}</NavLink>
            <img src={'https://www.getillustrations.com/photos/pack/3d-avatar-male_lg.png'} alt={'logo'}/>
        </div>
    );
}
export default DialogItem;