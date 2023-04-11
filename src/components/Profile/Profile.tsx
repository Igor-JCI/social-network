import React from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {ContactsType, ProfileType} from "./ProfileContainer";
type ProfilePropsType = {
    profile: ProfileType,
    status: string,
    updateStatus: (status: string) => void,
    isOwner: boolean,
    savePhoto: (file: File) => void,
    saveProfile: (aboutMe: string, fullName: string, lookingForAJob: boolean, lookingForAJobDescription: string, contacts:ContactsType) =>Promise<void>
}
const Profile = (props: ProfilePropsType) => {
    return (
        <div>
            <ProfileInfo saveProfile={props.saveProfile} isOwner={props.isOwner} profile={props.profile}
                         status={props.status} updateStatus={props.updateStatus} savePhoto={props.savePhoto}/>
            <MyPostsContainer/>
        </div>
    )
}


export default Profile
