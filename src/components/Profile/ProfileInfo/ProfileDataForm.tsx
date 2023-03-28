import React from "react";
import {Input, Textarea} from "../../Common/FormsControls/FormsControls";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {ProfileType} from "../ProfileContainer";
import s from "./ProfileInfo.module.css"
import style from "../../Common/FormsControls/FormsControls.module.css";


type ProfileDataFormType = {
    profile: ProfileType
}

const ProfileDataForm: React.FC<InjectedFormProps<any, ProfileDataFormType> & ProfileDataFormType> = ({ handleSubmit, profile, error, ...props }) => {
    console.log(error)
    return <form onSubmit={handleSubmit}>
        <div>
            <button>Save</button>
        </div>
        {error && <div className={style.formSummaryError}>{error}</div>}
        <div>
            <b>Full Name</b>: <Field component={Input} validate={[]} name="fullName" placeholder="Full name"/>
        </div>
        <div>
            <b>Looking for a job</b>: <Field component={Input} type={"checkbox"} validate={[]} name="lookingForAJob"
                                             placeholder=""/>
        </div>

        <div>
            <b>My professional skills</b>: <Field component={Textarea} validate={[]} name="lookingForAJobDescription"
                                                  placeholder="My professional skills"/>
        </div>

        <div>
            <b>About me</b>: <Field component={Textarea} validate={[]} name="aboutMe" placeholder="About me"/>
        </div>
        <div>
            <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
            return <div key={key} className={s.contact}>
                <b>{key}</b>: <Field component={Input} validate={[]} name={"contacts." + key} placeholder={key}/>
            </div>
        })}
        </div>
    </form>
}

const ProfileDataFormReduxForm = reduxForm<any,ProfileDataFormType>({ form: "edit-profile" })(ProfileDataForm)
/*const ProfileDataFormRedux = reduxForm<{}, ProfileDataFormType>({form: "edit-profile"})(ProfileDataForm)*/

export default ProfileDataFormReduxForm