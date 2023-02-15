import React from "react";
import classes from "./Navbar.module.css";
import {NavLink} from "react-router-dom";
import SideBar from "./SideBar/SideBar";

const Navbar = (props) => {
    let sideBar =  {
        contacts: [
            {id: 1, name: 'Artur'},
            {id: 2, name: 'Inessa'},
            {id: 3, name: 'Misha'},
        ]
    };

    return (
        <nav className={classes.nav}>
            <div>
                <NavLink to={'./Profile'}
                         className={navData => navData.isActive ? classes.active : classes.item}>Profile</NavLink>
            </div>
            <div>
                <NavLink to={'./Dialogs'} dialogs={props.dialogs} messages={props}
                         className={navData => navData.isActive ? classes.active : classes.item}>Messages</NavLink>
            </div>
            <div>
                <NavLink to={'./users'}
                         className={navData => navData.isActive ? classes.active : classes.item}>Users</NavLink>
            </div>
            <div>
                <NavLink to={'./News'}
                         className={navData => navData.isActive ? classes.active : classes.item}>News</NavLink>
            </div>
            <div>
                <NavLink to={'./Music'}
                         className={navData => navData.isActive ? classes.active : classes.item}>Music</NavLink>
            </div>
            <div>
                <NavLink to={'./Settings'}
                         className={navData => navData.isActive ? classes.active : classes.item}>Settings</NavLink>
            </div>

            <div className={'friends'}>
                <SideBar sidebar={sideBar}/>
            </div>
        </nav>
    );
}
export default Navbar;