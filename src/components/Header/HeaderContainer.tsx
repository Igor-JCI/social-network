import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {RootStateType} from "../../Redux/Redux-store";
import {getUserData} from "../../Redux/Auth-reducer";


type MSTP = {
    isAuth: boolean,
    login: string
}
type MDTP = {
    getUserData: () => void
}

type CommonType = MSTP & MDTP

class HeaderContainer extends React.Component<CommonType> {
    constructor(props: CommonType) {
        super(props);
    }

    componentDidMount() {
        this.props.getUserData()
    }

    render() {
        return <Header {...this.props}/>
    }
}


let mapStateToProps = (state: RootStateType): MSTP => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}

export default connect(mapStateToProps, {getUserData})(HeaderContainer)