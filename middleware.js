const { createMiddlewareClient } = require("@supabase/auth-helpers-nextjs")
import { NextResponse } from "next/server"

export async function middleware(req){
        const res = NextResponse.next();
        const supabase = createMiddlewareClient({req, res});

        const {
           data:{
                session
           }
        } = await supabase.auth.getSession();

        await supabase.auth.getSession();

        
};

export const config = {
        matcher:[
                '/((?!api|_next/statis|_next/image|favicon.ico).*)',
        ]
}