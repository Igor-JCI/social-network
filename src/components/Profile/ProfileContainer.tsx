import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {RootStateType} from "../../Redux/Redux-store";
import {getUserProfile} from "../../Redux/Profile-reducer";
import {withRouter} from "react-router-dom";
import {RouteComponentProps} from "react-router";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";
import {text} from "stream/consumers";

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

export type MSTPRedirectType = {
    isAuth: boolean
}
type MSTP = {
    profile: ProfileType,
}


let mapStateToProps = (state: RootStateType): MSTP => {
    return {
        profile: state.profilePage.profile
    }
}
export type MDTP = {
    getUserProfile: (userId: string) => void
}

let AuthRedirectComponent = withAuthRedirect(ProfileContainer)

let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent)


const PContainer = connect(mapStateToProps, {getUserProfile})(WithUrlDataContainerComponent)
export default PContainer
