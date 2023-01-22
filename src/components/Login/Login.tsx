import React, {PropsWithChildren} from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../Common/FormsControls/FormsControls";
import {required} from "../../Utils/Validators/validators";
import {connect} from "react-redux";
import {login, logout} from "../../Redux/Auth-reducer";
import {RootStateType} from "../../Redux/Redux-store";
import {Redirect} from "react-router-dom";
import style from "../../components/Common/FormsControls/FormsControls.module.css"

type MSTP = {
    isAuth: boolean
}
type MDTP = {
    login: (email: string, password: string, rememberMe: boolean) => void,
    logout: () => void
}
type CommonType = MDTP & MSTP

const Login = (props: CommonType) => {
    const onSubmit = (formData: any) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }

    if (props.isAuth) {
        return <Redirect to={"/profile"}/>
    }
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>

    )
}

const LoginForm = (props: PropsWithChildren<InjectedFormProps<{}, {}, string>>) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field placeholder={"Email"} name={"email"} component={Input} validate={[required]}/>
        </div>
        <div>
            <Field placeholder={"Password"} name={"password"} component={Input} validate={[required]}
                   type={"password"}/>
        </div>
        <div>
            <Field component={Input} name={"rememberMe"} type={"checkbox"}/>
            Remember me
        </div>
        {props.error && <div className={style.formSummaryError}>{props.error}</div>}
        <div>
            <button>Login</button>
        </div>
    </form>
}
const LoginReduxForm = reduxForm({form: "Login"})(LoginForm)

let mapStateToProps = (state: RootStateType): MSTP => {
    return {
        isAuth: state.auth.isAuth
    }
}
export default connect(mapStateToProps, {login, logout})(Login)