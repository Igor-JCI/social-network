import React from "react";
import profileReducer, {addPostAC, initialStateType} from "./Profile-reducer";

/*it("lenght of posts should be incremented", () => {
        // 1. test data
        type stateType = {
            posts: Array<ArrayType>
        }
        type ArrayType = {
            id: string,
            message: string,
            likesCount: number
        }
        let action = addPostAC("IT GO")
        let initialState = {
            posts: [
                {id: "1", message: "Hi, how are you?", likesCount: 12},
                {id: "2", message: "It's my first post?", likesCount: 11},
            ]
        }
        // 2. action
        let newState = profileReducer<initialStateType>(initialState, action)
        // 3. expectation
        expect(newState.posts.length).toBe(3)

    }
)*/
