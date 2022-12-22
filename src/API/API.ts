import axios from "axios";

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
        return instance.post(`follow/${userId}`)


    },
    unfollow(userId: number) {
        return instance.delete(`follow/${userId}`)
    }
}

