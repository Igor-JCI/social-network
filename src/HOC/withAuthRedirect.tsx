import React, {ComponentType, FC} from "react";
import {Redirect} from "react-router-dom";

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


export function withAuthRedirect<T>(Component: ComponentType<T>)  {

    const RedirectComponent = (props: any) => {
        const {isAuth, ...restProps} = props
        if (!isAuth) {
           return <Redirect to="/login"/>
        }


        return <Component {...restProps as T} />
    }
    return RedirectComponent
}


