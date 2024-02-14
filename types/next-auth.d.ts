import NextAuth, {DefaultSession} from "next-auth/next";

declare module "next-auth"{
    interface Session{
        supabaseAccessToken?: string;
        user:{
            address: string;
        } & DefaultSession["user"];
    }
}