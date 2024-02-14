'use client'
import { useSession } from "next-auth/react";


export default function Mepage(){
    const { data: session, status } = useSession()

    return(
        <div>
            <pre>{JSON.stringify(session?.user , null ,2)}</pre>
        </div>

    )
}