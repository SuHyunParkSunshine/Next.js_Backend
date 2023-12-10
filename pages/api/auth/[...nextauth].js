// Setting Next-auth 

import nextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import { MongoDBAdapter} from "@next-auth/mongodb-adapter"
import { connectDB } from "@/util/database";

export const authOptions = {
    providers: [
        GithubProvider({
            clientId: 'd7e808cbc50a0b15e00a',
            clientSecret: '841728b06372f42728acbcb19ac8bf1d518fef0e',
        }),
    ],
    secret : 'qwer1234',
    adapter : MongoDBAdapter(connectDB) // DB Adapter 사용
};
export default nextAuth(authOptions)