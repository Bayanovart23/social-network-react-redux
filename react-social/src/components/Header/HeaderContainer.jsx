import React from "react";
import {useEffect} from "react";
import Header from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {setAuthUserData} from "../Redux/Auth-reducer";
import {getLogin} from "../../api/api";

const HeaderContainer = (props) => {


    useEffect(()=> {
        getLogin().then(data => {
            if (data.resultCode === 0){
                let {id,email, login} = data.data
                props.setAuthUserData(id, email, login);
            }
    })}, [])

    return (
        <Header {...props}/>
    );

}

const mapStateToProps = (state) => (
    {
        isAuth: state.auth.isAuth,
            login: state.auth.login,
    }
)
export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer);