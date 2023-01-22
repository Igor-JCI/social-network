import React from "react";
import {Input, Textarea} from "../../Common/FormsControls/FormsControls";
import {Field, InjectedFormProps, reduxForm} from "redux-form";

type ProfileDataFormType = {
    aboutMe: string
    fullName: string
    lookingForAJob:boolean
    lookingForAJobDescription:string
}

const ProfileDataForm: React.FC<InjectedFormProps<ProfileDataFormType>> = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <button>Save</button>
        </div>

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
        {/*<div>
            <b>Contacts</b>: {Object.keys(props.profile.contacts).map(key => {
            return <Contact key={key}
                            contactTitle={key}
                            contactValue={props.profile.contacts[key as keyof ContactsType]}/>
        })}
        </div>*/}
    </form>
}

const ProfileDataFormRedux = reduxForm<ProfileDataFormType>({form: "edit-profile"})(ProfileDataForm)

export default ProfileDataFormRedux