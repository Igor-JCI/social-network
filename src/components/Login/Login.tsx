import React from "react";
import {Field, reduxForm} from "redux-form";

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
            <Field placeholder={"Login"} name={"Login"} component={"input"}/>
        </div>
        <div>
            <Field placeholder={"Password"} name={"Password"} component={"input"}/>
        </div>
        <div>
            <Field component={"input"} name={"rememberMe"} type={"checkbox"}/>
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