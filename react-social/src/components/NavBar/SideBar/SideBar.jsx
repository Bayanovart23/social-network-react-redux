import React from "react";
import classes from "./SideBar.module.css";

let SideBar = (props) => {

    return (
        <div className={classes.sbFriends}>

            <div>
                <img
                    src={'https://img.freepik.com/free-psd/3d-illustration-of-person-with-sunglasses_23-2149436188.jpg?w=2000'}
                    alt={'avatar'}/>
                <h4>
                    {props.sidebar.contacts[0].name}
                </h4>
            </div>
            <div>
                <img
                    src={'https://img.freepik.com/free-psd/3d-illustration-of-person-with-sunglasses_23-2149436188.jpg?w=2000'}
                    alt={'avatar'}/>
                <h4>
                    {props.sidebar.contacts[2].name}
                </h4>
            </div>
            <div>
                <img
                    src={'https://img.freepik.com/free-psd/3d-illustration-of-person-with-sunglasses_23-2149436188.jpg?w=2000'}
                    alt={'avatar'}/>
                <h4>
                    {props.sidebar.contacts[1].name}
                </h4>
            </div>
        </div>
    )
}

export default SideBar;