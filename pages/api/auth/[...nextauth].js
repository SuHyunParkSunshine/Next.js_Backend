// Setting Next-auth 

import nextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

export const authOptions = {
    providers: [
        GithubProvider({
            clientId: 'd7e808cbc50a0b15e00a',
            clientSecret: '841728b06372f42728acbcb19ac8bf1d518fef0e',
        }),
    ],
    secret : 'qwer1234'
};
export default nextAuth(authOptions)