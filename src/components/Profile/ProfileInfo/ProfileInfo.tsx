import React, {ChangeEvent, useState} from "react";
import s from "./ProfileInfo.module.css"
import {ContactsType, ProfileType} from "../ProfileContainer";
import {Preloader} from "../../Common/Preloader/Preloader";
import {ProfileStatusWIthHooks} from "./ProfileStatusWithHooks";
import userPhoto from "../../../assets/images/user.png"
import ProfileDataFormRedux from "./ProfileDataForm";
import {Button, Flex} from 'antd';


type ProfileInfoType = {
    profile: ProfileType,
    status: string,
    updateStatus: (status: string) => void,
    isOwner: boolean,
    savePhoto: (file: File) => void,
    saveProfile: (aboutMe: string, fullName: string, lookingForAJob: boolean, lookingForAJobDescription: string, contacts: ContactsType) => Promise<void>
}
type ContactType = {
    contactTitle: any,
    contactValue: string | null
}
type ProfileDataType = {
    profile: ProfileType,
    isOwner: boolean,
    goToEditMode: () => void
}
export const ProfileInfo: React.FC<ProfileInfoType> = ({saveProfile, ...props}) => {
    let [editMode, setEditMode] = useState(false)

    if (!props.profile) {
        return <Preloader/>
    }
    const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            props.savePhoto(e.target.files[0])
        }
    }
    const onSubmit = (formData: any) => {
        saveProfile(formData.aboutMe, formData.fullName, formData.lookingForAJob, formData.lookingForAJobDescription, formData.contacts)
            .then(() => {
                setEditMode(false)
            })
    }
    return (
        <div>
            <div className={s.descriptionBlock}>
                <div>
                    <div className={s.mainPhoto}>
                        <img src={props.profile.photos.large || userPhoto} className={s.mainPhoto}/>
                    </div>
                    {props.isOwner &&
                        <div className={s.image}>
                            <input type="file" onChange={onMainPhotoSelected}/>
                        </div>
                    }
                </div>


                {editMode ?
                    <ProfileDataFormRedux profile={props.profile} initialValues={props.profile} onSubmit={onSubmit}/> :
                    <ProfileData goToEditMode={() => setEditMode(true)} profile={props.profile}
                                 isOwner={props.isOwner}/>}
                <div className={s.status}>
                    <ProfileStatusWIthHooks status={props.status} updateStatus={props.updateStatus}/>
                </div>
            </div>
        </div>
    )
}
const ProfileData = (props: ProfileDataType) => {
    return <div>
        {
            props.isOwner && <div>
                <Flex gap="small" wrap="wrap">
                    <Button type="primary" onClick={props.goToEditMode}>Edit</Button>
                </Flex>
            </div>
        }

        <div className={s.content}>
            <div>
                <b>Full Name</b>: {props.profile.fullName}
            </div>
            <div>
                <b>Looking for a job</b>: {props.profile.lookingForAJob ? "yes" : "no"}
            </div>
            {
                props.profile.lookingForAJob &&
                <div>
                    <b>My professional skills</b>: {props.profile.lookingForAJobDescription}
                </div>
            }
            <div>
                <b>About me</b>: {props.profile.aboutMe}
            </div>
        </div>

        <div>
            <b>Contacts</b>: {Object.keys(props.profile.contacts).map(key => {
            return <Contact key={key}
                            contactTitle={key}
                            contactValue={props.profile.contacts[key as keyof ContactsType]}/>
        })}
        </div>
    </div>
}

export const Contact = (props: ContactType) => {
    return <div className={s.contact}><b>{props.contactTitle}</b>: {props.contactValue ? props.contactValue : 'none'}
    </div>
}