import axios from 'axios';

export const api = axios.create({
    baseURL: "https://connectlab.onrender.com/",
})
export const createLogin = async (email, password) => {
    return api.post('auth/login/', {email,password});
}


const token = localStorage.getItem("token")
const headers ={"Authorization": `Bearer ${token}`}
console.log(headers)
export const getDevices = async () =>{
    return api.get("/devices", {
        headers: {
        'Authorization': `Bearer ${token}`
    }
    })
}


