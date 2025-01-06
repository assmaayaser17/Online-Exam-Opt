import NextAuth from "next-auth"
import { JWT } from "next-auth/jwt"

declare module "next-auth" {
 
  interface User extends Pick <DatabaseFields ,"_id">  {
         token:string,
        username: string,
        firstName: string,
        lastName: string,
        email:string,
        phone: string,
        role: string,
        isVerified: boolean
  }
  interface Session {
    username: string,
    firstName: string,
    lastName: string,
    email:string,
    phone: string,
    role: string,
    isVerified: boolean 
  }
  
 
}

declare module "next-auth/jwt" {
    interface JWT {
        token:string,
        username: string,
        firstName: string,
        lastName: string,
        email:string,
        phone: string,
        role: string,
        isVerified: boolean
        
      }


  }

