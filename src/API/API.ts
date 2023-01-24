import axios from "axios";
import {ContactsType} from "../components/Profile/ProfileContainer";
type MeResponseData = {
    id: string,
    login: string,
    email: string
}
export enum StatusCodes {
    success,
    failed
}
export type CommonResponse<T> = {
    data: T
    fieldErrors: string[]
    messages: string[]
    resultCode: StatusCodes
}

const instance = axios.create(
    {
        withCredentials: true,
        baseURL: "https://social-network.samuraijs.com/api/1.0/",
        headers: {
            "API-KEY": "8c42f357-e574-4a47-b1b5-8938589ef98b"
        }
    }
)

export const userAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get(`users/?page=${currentPage}&count=${pageSize}`).then(response => {
            return response.data
        })
    },
    follow(userId: number) {
        return instance.post<CommonResponse<{}>>(`follow/${userId}`)
    },
    unfollow(userId: number) {
        return instance.delete(`follow/${userId}`)
    }
}
export const profileAPI = {
    getProfile(userId: string) {
        return instance.get(`profile/` + userId)
    },
    getStatus(userId: string) {
        return instance.get("profile/status/" + userId)
    },
    updateStatus(status: string) {
        return instance.put("profile/status/", {status: status})
    },
    savePhoto (photoFile:File) {
        const formData = new FormData()
        formData.append("image",photoFile )
        return instance.post("profile/photo", formData,{
            headers:{
                "Content-Type": "multipart/form-data"
            }
        })
    },
    saveProfile (aboutMe: string, fullName: string, lookingForAJob: boolean, lookingForAJobDescription: string, contacts:ContactsType) {
        return instance.put("profile", {aboutMe,fullName,lookingForAJob, lookingForAJobDescription,contacts })
    }
}
export const authAPI = {
    me() {
        return instance.get<CommonResponse<MeResponseData>>(`auth/me`)
    },
    login(email: string, password: string, rememberMe: boolean = false) {
        return instance.post(`auth/login`, {email, password, rememberMe})
    },
    logout() {
        return instance.delete(`auth/login`)
    }
}


