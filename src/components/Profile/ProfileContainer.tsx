import React from "react";
import Profile from "./Profile";
import {CommonType} from "../Users/UsersContainer";
import axios from "axios";
import {connect} from "react-redux";
import {RootStateType} from "../../Redux/Redux-store";
import {setUserProfile} from "../../Redux/Profile-reducer";
import {withRouter} from "react-router-dom";
import {RouteComponentProps} from "react-router";

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
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
            .then(response => {
                this.props.setUserProfile(response.data)
            })
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

let WithUrlDataContainerComponent = withRouter(ProfileContainer)


const PContainer = connect(mapStateToProps, {setUserProfile})(WithUrlDataContainerComponent)
export default PContainer
