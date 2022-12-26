import React from "react";
import Profile from "./Profile";
import {CommonType} from "../Users/UsersContainer";
import axios from "axios";
import {connect} from "react-redux";
import {RootStateType} from "../../Redux/Redux-store";
import {getUserProfile} from "../../Redux/Profile-reducer";
import {Redirect, withRouter} from "react-router-dom";
import {RouteComponentProps} from "react-router";
import {userAPI} from "../../API/API";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";

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
type ProfileContainerPropsType = MSTP & MDTP & RouteComponentProps<{ userId: string }>

class ProfileContainer extends React.Component<ProfileContainerPropsType> {
    constructor(props: ProfileContainerPropsType) {
        super(props);
    }

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = "2"
        }
        this.props.getUserProfile(userId)
    }

    render() {
        const {profile} = this.props
        return (
            <div>
                <Profile profile={profile}/>
            </div>
        )
    }

}

type MSTPRedirectType = {
    isAuth: boolean
}
type MSTP = {
    profile: ProfileType,
}
let mapStateToPropsRedirect = (state: RootStateType): MSTPRedirectType => {
    return {
        isAuth: state.auth.isAuth
    }
}

let mapStateToProps = (state: RootStateType): MSTP => {
    return {
        profile: state.profilePage.profile
    }
}
type MDTP = {
    getUserProfile: (userId: string) => void
}

let AuthRedirectComponent = withAuthRedirect(ProfileContainer)

AuthRedirectComponent = connect(mapStateToPropsRedirect, {})(AuthRedirectComponent)

let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent)


const PContainer = connect(mapStateToProps, {getUserProfile})(WithUrlDataContainerComponent)
export default PContainer
