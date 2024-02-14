import NextAuth from "next-auth"
import { SupabaseAdapter } from "@auth/supabase-adapter"
import GoogleProvider from "next-auth/providers/google";
// For more information on each option (and a full list of options) go to
// https://authjs.dev/reference/core#authconfig
const handler = NextAuth({
  // https://authjs.dev/reference/core/providers
  session:{
    strategy: 'jwt'
  },
  adapter: SupabaseAdapter({
    url: process.env.NEXT_PUBLIC_SUPABASE_URL ?? "",
    secret: process.env.SUPABASE_SERVICE_ROLE_KEY ?? "",
  }),

  providers:[
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code"
        }
      }
    }),
  ],

  callbacks:{

    session({ session, token, user }) {
      return session // The return type will match the one returned in `useSession()`
    },
  }
})

export {handler as GET , handler as POST};