
import { getServerSession,Session } from "next-auth";


export default async function page (){

    const session =await getServerSession() as Session;
    console.log("session",session)


}