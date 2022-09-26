import axios from 'axios';

export const api = axios.create({
    baseURL: "https://connectlab.onrender.com/",
})

export const createLogin = async (email, password) => {
    return api.post('auth/login/', {email,password});
}

const token = localStorage.getItem("token")

export const getDevices = async () =>{
    return api.get("/devices", {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
}

export const getLocals = async () =>{
    return api.get("/locals", {
        headers: {
            'Authorization': `Bearer ${token}`,
        }
    })
}

export const addDevices = async (userId, deviceId, isOn, localId, room) =>{
    return api.post("/userDevices", 
       {
            "user": userId,
            "device": deviceId,
            "is_on": isOn,
            "local": localId,
            "room": room,
        },{
          headers: {
            'Authorization':`Bearer ${token}`,
        },
    })
}

export const getUsersDevices = async (id) =>{
    return api.get("/userDevices/user/"+id, {
       headers: {
            'authorization':`Bearer ${token}`,
        }
    }).then((res) => {
        return res
      })
      .catch((error) => {
        return error
      })
}

export const getUsers = async (id) =>{
    return api.get("/users/"+id, {
       headers: {
            'authorization':`Bearer ${token}`,
        }
    }).then((res) => {
        return res
      })
      .catch((error) => {
        console.log(error);
        return error
      })
}