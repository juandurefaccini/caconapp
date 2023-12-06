import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";

const authHandler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
        })
    ],
    secret: process.env.SECRET,
})

export {authHandler as GET, authHandler as POST}