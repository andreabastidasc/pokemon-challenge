import { axiosLogin } from "./api"


const authService = {}

authService.LoginUser = async(data) => {
    return await axiosLogin.post('/login', data)
    .then(res => res.data)
    .catch(error => {
        throw error 
    })
}

export default authService