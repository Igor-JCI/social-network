import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PostsArrayType} from "../../App";
import {ActionsType} from "../../Redux/Store";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import Profile from "./Profile";
import {CommonType} from "../Users/UsersContainer";
import axios from "axios";
import {connect} from "react-redux";
import {RootStateType} from "../../Redux/Redux-store";
import {setUserProfile} from "../../Redux/Profile-reducer";

export type ProfileType = {
    aboutMe: string,
    contacts: ContactsType,
    lookingForAJob: boolean,
    lookingForAJobDescription: string,
    userId: number,
    photos: PhotosType
}
export type ContactsType = {
    facebook: string,
    website: null,
    vk: string,
    twitter: string,
    instagram: string,
    youtube: null,
    github: string,
    "mainLink": null
}
export type PhotosType = {
    small: string,
    large: string,
}
type ProfileContainerPropsType = MSTP & MDTP

class ProfileContainer extends React.Component<ProfileContainerPropsType> {
    constructor(props: ProfileContainerPropsType) {
        super(props);
    }

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => {
                this.props.setUserProfile(response.data)
            })
    }

    render() {
        const {profile} = this.props
        return (
            <div>
                <Profile profile = {profile}/>
            </div>
        )
    }

}


type MSTP = {
    profile: ProfileType
}

let mapStateToProps = (state: RootStateType): MSTP => {
    return {
        profile: state.profilePage.profile
    }
}

type MDTP = {
    setUserProfile: (profile: ProfileType) => void
}

export default connect(mapStateToProps, {setUserProfile})(ProfileContainer)
