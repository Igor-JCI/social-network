import React, {ComponentType} from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {RootStateType} from "../../Redux/Redux-store";
import {getStatus, getUserProfile, savePhoto, saveProfile, updateStatus} from "../../Redux/Profile-reducer";
import {withRouter} from "react-router-dom";
import {RouteComponentProps} from "react-router";
import {compose} from "redux";

export type ProfileType = {
    aboutMe: string,
    contacts: ContactsType,
    lookingForAJob: boolean,
    lookingForAJobDescription: string,
    fullName: string
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
export type MSTPRedirectType = {
    isAuth: boolean
}
type MSTP = {
    profile: ProfileType,
    status: string,
    authorizedUserId: string,
    isAuth: boolean
}
export type MDTP = {
    getUserProfile: (userId: string) => void,
    getStatus: (userId: string) => void,
    updateStatus: (status: string) => void,
    savePhoto: (file: File) => void,
    saveProfile: (aboutMe: string, fullName: string, lookingForAJob: boolean, lookingForAJobDescription: string, contacts:ContactsType) => Promise<void>
}

class ProfileContainer extends React.Component<ProfileContainerPropsType> {
    constructor(props: ProfileContainerPropsType) {
        super(props);
    }
    refreshProfile() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = this.props.authorizedUserId
            if (!userId) {
                this.props.history.push("/login")
            }
        }
        this.props.getUserProfile(userId)
        this.props.getStatus(userId)
    }
    componentDidMount() {
        this.refreshProfile()
    }
    componentDidUpdate(prevProps: Readonly<ProfileContainerPropsType>, prevState: Readonly<{}>, snapshot?: any) {
        if (this.props.match.params.userId != prevProps.match.params.userId) {
            this.refreshProfile()
        }

    }

    render() {
        const {profile} = this.props
        return (
            <div>
                <Profile
                    saveProfile={this.props.saveProfile} isOwner={!this.props.match.params.userId}
                    profile={profile} status={this.props.status} updateStatus={this.props.updateStatus}
                    savePhoto={this.props.savePhoto}
                />
            </div>
        )
    }
}

let mapStateToProps = (state: RootStateType): MSTP => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authorizedUserId: state.auth.id,
        isAuth: state.auth.isAuth
    }
}
export default compose<ComponentType>(
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus, savePhoto,saveProfile}),
    withRouter,
)(ProfileContainer)