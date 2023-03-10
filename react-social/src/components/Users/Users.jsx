import React from 'react';
import s from "./users.module.css";
import userPhoto from "../../assets/images/user.png";
import {NavLink} from "react-router-dom";


const Users = (props) => {
    let pages = [];
    for(let i = 1; i < 20; i++){
        pages.push(i)
    }

    return (
        <div>
            <div>
                {pages.map((p) => <span className={props.currentPage === p && s.selectedPage} onClick={(e)=>{props.onPageChanged(p)}}>{p}</span>)}
            </div>
            {props.users.map(u => <div key={u.id}>
            <span>
                <div>
                    <NavLink to={'/Profile/' + u.id}>
                    <img className={s.avatar} src={u.photos.small != null ? u.photos.small : userPhoto}/>
                        </NavLink>
                </div>
                <div>
                    {u.followed
                        ? <button disabled={props.followingInProgress} onClick={() => {
                            props.unFollow(u.id)
                            }}>Unfollow</button>
                        : <button disabled={props.followingInProgress} onClick={() => {

                            props.follow(u.id)
                            }}>Follow</button> }
                </div>
            </span>
                    <span>
                <span>
                        <div>
                        {u.name}
                        </div>
                        <div>
                        {u.status}
                </div>
                </span>
                <span>
                                        <div>
                        {/*{u.location.country}*/}
                    </div>
                    <div>
                        {/*{u.location.city}*/}
                    </div>
                </span>
            </span>
                </div>)}
        </div>
    );
};

export default Users;