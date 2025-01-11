
'use server'
import { JSON_HEADER } from "../constants/api.constant"
import { APIResponse } from "../types/api";

const BASE_URL= process.env.API +'/auth'

export const forgotpasswordAction = async (field:RegisterFields)=>{
    const response= await fetch(BASE_URL+'/forgotPassword',{
        method:'POST',
        body:JSON.stringify(field),
        headers:{
            ...JSON_HEADER
        }
       
    })
    const payload:APIResponse<LoginResponse> = await response.json()
    return payload





}