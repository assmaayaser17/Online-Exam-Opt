

import NextAuth, { NextAuthOptions } from "next-auth"
import Credentials from "next-auth/providers/credentials"
import { JSON_HEADER } from "./lib/constants/api.constant";
import { APIResponse } from "./lib/types/api";



export const authOptions: NextAuthOptions = {
pages:{
    signIn:'/auth/login', //Customize page
},
 providers:[
   
   Credentials({
    name:'Credentials',

    credentials:{
        email:{},
        password:{}
    },
    authorize: async (credentials) =>{
        const baseUrl= process.env.API +'/auth/signin';


        const response=await fetch(baseUrl,{
           method:'POST',
           cache:'no-store',
           body:JSON.stringify({
            email:credentials?.email,
            password:credentials?.password

           }),
           headers:{
            ...JSON_HEADER,
           


           }



        })

        const payload:APIResponse<LoginResponse> = await response.json()
        //return user if response was successful
        if(payload.message==='success') {
            console.log('payload',payload)
            return {
                token:payload?.token,
                ...payload?.user
            }
            
        }
        //if wise response was wrong
        throw new Error(payload.message)
    },


   })
],
callbacks:{
    jwt:  ({token,user})=>{
        if(user){
            token.token=user.token;
           token.username=user.username;
           token.firstName=user.firstName;
           token.lastName=user.lastName;
            token.email=user.email;
           token.phone=user.phone;
            token.role=user.role;
            token.isVerified= user.isVerified
            console.log('jwttoken',token)
        }

        return token;
        
    },
    session:({session,token}) =>{
        session.username=token.username;
        session.firstName=token.firstName;
        session.lastName=token.lastName;
         session.email=token.email;
        session.phone=token.phone;
         session.role=token.role;
         session.isVerified= token.isVerified;

         return session
    }
    
}


}



export default NextAuth(authOptions)