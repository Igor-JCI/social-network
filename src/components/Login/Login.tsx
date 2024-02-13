import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../Common/FormsControls/FormsControls";
import {required} from "../../Utils/Validators/validators";
import {connect} from "react-redux";
import {login, logout} from "../../Redux/Auth-reducer";
import {RootStateType} from "../../Redux/Redux-store";
import {Redirect} from "react-router-dom";
import style from "../../components/Common/FormsControls/FormsControls.module.css"

type MSTP = {
    isAuth: boolean,
    captchaUrl: null | string | undefined
}
type MDTP = {
    login: (email: string, password: string, rememberMe: boolean, captcha: string) => void,
    logout: () => void
}
type CommonType = MDTP & MSTP

const Login = (props: CommonType) => {
    const onSubmit = (formData: any) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha)
    }

    if (props.isAuth) {
        return <Redirect to={"/profile"}/>
    }
    return (
        <div>
            <h1>Login</h1>
            <h4>Use common test account credentials:</h4>
            <h5>Email: 7.jciab.7@gmail.com</h5>
            <h5>Password: 111</h5>
            <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
        </div>

    )
}

const LoginForm: React.FC<InjectedFormProps<any, CommonType> & CommonType> = (props) => {
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
        {props.captchaUrl && <img src={props.captchaUrl}/>}
        {props.captchaUrl &&
            <Field component={Input} name={"captcha"} validate={[required]} placeholder={"Symbols from image"}/>}
        {props.error && <div className={style.formSummaryError}>{props.error}</div>}
        <div>
            <button>Login</button>
        </div>
    </form>
}
const LoginReduxForm = reduxForm<any, any>({form: "Login"})(LoginForm)

let mapStateToProps = (state: RootStateType): MSTP => {
    return {
        isAuth: state.auth.isAuth,
        captchaUrl: state.auth.captchaUrl
    }
}
export default connect(mapStateToProps, {login, logout})(Login)