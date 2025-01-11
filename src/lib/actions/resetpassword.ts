
'use server'
import { JSON_HEADER } from "../constants/api.constant"
import { APIResponse } from "../types/api";

const BASE_URL= process.env.API +'/auth'

export const resetpasswordAction = async (field:RegisterFields)=>{
    const response= await fetch(BASE_URL+'/resetPassword',{
        method:'POST',
        body:JSON.stringify(field),
        headers:{
            ...JSON_HEADER
        }
       
    })
    const payload:APIResponse<LoginResponse> = await response.json()
    return payload





}


