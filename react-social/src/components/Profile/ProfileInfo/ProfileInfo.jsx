import React from "react";
import classes from "./ProfileInfo.module.css";
import Preloader from "../../common/prerloader/Preloader";
import bg from './../../../assets/images/React-Hooks-Comoutilizar--motivac-o-es-eexemplos-pra-ticos.png'

const ProfileInfo = (props) => {
    if (!props.profile){
        return <Preloader/>
    }
    return (
        <div>
            <div>
                <img className={classes.bg}
                    src={bg} alt={'bg'}/>
            </div>
            <div className={classes.descriptionBlock}>
                <img src={props.profile.photos.large}/>
                avatar + discription
                <ul>
                    <li><span>О себе:</span>{props.profile.aboutMe}</li>
                    <li><span>Полное имя:</span>{props.profile.fullName}</li>
                    <li><span>GitHub: </span>{props.profile.github}</li>
                    <li><span>В поисках работы:</span>{props.profile.aboutMe ? `Да`: `Нет` }</li>
                    <li><span>Резюме:</span>{props.profile.lookingForAJobDescription}</li>
                </ul>
            </div>
        </div>
    );
}

export default ProfileInfo;