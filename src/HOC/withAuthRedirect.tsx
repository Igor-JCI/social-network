import React, {ComponentType, FC} from "react";
import {Redirect} from "react-router-dom";
import {RootStateType} from "../Redux/Redux-store";
import {connect} from "react-redux";
import {MDTP, MSTPRedirectType} from "../components/Profile/ProfileContainer";

/*
export const withAuthRedirect = (Component: JSX.Element) => {
  class RedirectConponent extends React.Component {
      render() {
          if (true) {
              return <Redirect to={"/login"}/>
          }
          return  <Component {...restProps as T as any} />

      }
  }
  return RedirectConponent
}
*/

let mapStateToPropsRedirect = (state: RootStateType): MSTPRedirectType => {
    return {
        isAuth: state.auth.isAuth
    }
}

export function withAuthRedirect<T>(Component: ComponentType<T>): ComponentType<T> {

    const RedirectComponent = (props: any) => {
        const {isAuth, ...restProps} = props
        if (!isAuth) {
           return <Redirect to="/login"/>
        }


        return <Component {...restProps as T} />
    }

    let ConnectedAuthRedirectComponent = connect<MSTPRedirectType,MDTP,{},RootStateType>(mapStateToPropsRedirect)(RedirectComponent)

    return ConnectedAuthRedirectComponent
}


