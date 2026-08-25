import apiClient from "../../../lib/apiClient";



export const registerUser = async(data)=>{

    const response = await apiClient.post(
        "/auth/register",
        data
    );


    return response.data;

};



export const verifyEmail = async(token)=>{


    const response = await apiClient.get(
        `/auth/verify-email?token=${token}`
    );


    return response.data;

};



export const loginUser = async(data)=>{


    const response = await apiClient.post(
        "/auth/login",
        data
    );


    return response.data;

};



export const logoutUser = async()=>{


    const response = await apiClient.post(
        "/auth/logout"
    );


    return response.data;

};