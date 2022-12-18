import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {RootStateType} from "../../Redux/Redux-store";
import {AuthReducerType, setUserData} from "../../Redux/Auth-reducer";
import axios from "axios";

type MSTP = {
    isAuth: boolean,
    login:string
}
type MDTP = {
    setUserData:(data: AuthReducerType)=>void
}

type CommonType = MSTP & MDTP

class HeaderContainer extends React.Component<CommonType> {
    constructor(props: CommonType) {
        super(props);
    }

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`,{
            withCredentials: true
        })
            .then(response => {
                if (response.data.resultCode === 0) {
                    this.props.setUserData(response.data.data)
                }
            })
    }

    render() {

        return <Header {...this.props}/>
    }

}


let mapStateToProps = (state: RootStateType): MSTP => {
    return {
        isAuth: state.auth.isAuth,
        login:state.auth.login
    }
}

export default connect(mapStateToProps,{setUserData})(HeaderContainer)