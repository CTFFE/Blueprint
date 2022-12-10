import GitHubProvider from 'next-auth/providers/github';
import NextAuth from "next-auth";

export const authOptions = {
    providers: [
        GitHubProvider({
            clientId: process.env.BLUEPRINT_OAUTH_GITHUB_ID || "",
            clientSecret: process.env.BLUEPRINT_OAUTH_GITHUB_SECRET || ""
        })
    ]
}

export default NextAuth(authOptions);
