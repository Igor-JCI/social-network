import React from "react";
import s from "./ProfileInfo.module.css"
import {ProfileType} from "../ProfileContainer";
import {Preloader} from "../../Common/Preloader/Preloader";
import {ProfileStatus} from "./ProfileStatus"

type ProfileInfoType = {
    profile: ProfileType

}

export const ProfileInfo = (props:ProfileInfoType) => {
    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div>
          {/*  <div>
                <img
                    src="data:image/jpeg;base64,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"
                />
            </div>*/}
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large}/>
                <ProfileStatus status="Hello my friends"/>
            </div>
        </div>
    )
}