declare type User ={
    id:string,
    username: string,
    firstName: string,
    lastName: string,
    email:string,
    phone: string,
    role: string,
    isVerified: boolean,
}& DatabaseFields;

declare interface LoginResponse {
    token:string;
    user:User;

}