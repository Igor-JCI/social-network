import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input} from "../Common/FormsControls/FormsControls";
import {required} from "../../Utils/Validators/validators";

const Login = () => {
    const onSubmit = (formData: any) => {
        console.log(formData)
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>

    )
}

const LoginForm = (props: any) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field placeholder={"Login"} name={"Login"} component={Input} validate = {[required]}/>
        </div>
        <div>
            <Field placeholder={"Password"} name={"Password"} component={Input} validate = {[required]}/>
        </div>
        <div>
            <Field component={Input} name={"rememberMe"} type={"checkbox"}/>
            Remember me
        </div>
        <div>
            <button>Login</button>
        </div>
    </form>
}

const LoginReduxForm = reduxForm({form: "Login"})(LoginForm)

/*store.getState().form*/

export default Login