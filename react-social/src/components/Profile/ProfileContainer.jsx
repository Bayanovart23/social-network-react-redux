import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/Post/MyPostsContainer";
import {getCLS} from "web-vitals";
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../Redux/ProfilePage-reducer";
import {useParams} from "react-router-dom";
import {useEffect} from "react";


const ProfileContainer  = (props) => {

    const params = useParams();

    if(!params.userId){
        params.userId = '27885';
    }


    useEffect(() => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${params.userId}`).then(response => {
            props.setUserProfile(response.data);
        })});





        return (
            <Profile profile={props.profile}/>
        );

}
let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
})



export default connect(mapStateToProps, {setUserProfile}) (ProfileContainer);