import React from "react";
import {InitialStateType, UsersType} from "../Redux/Users-reducer";
type newObjPropsType = {
    followed:boolean
}

export const updateObjectInArray = (state:InitialStateType, itemId:number, objPropName:string, newObjProps:newObjPropsType) => {
    return state.users.map(u => {
        if (u[objPropName as keyof UsersType] === itemId) {
            return {...u,...newObjProps}
        }
        return u
    })

}
