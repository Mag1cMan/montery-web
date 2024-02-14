'use client'
import React, { useEffect } from 'react'
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function Page (){
    const {data: session, status} = useSession();
    const router = useRouter();

    useEffect(() => {
        if (status === "loading") return; // Do nothing while loading

        // If no session exists, redirect to /unauthenticated
        if (!session) {
            router.push('/unauthenticated');
        }
    }, [session, status, router]);



    return (
        <main className="h-screen flex items-center justify-center">
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/kingforge_nobg.png')", filter: 'brightness(0.8)' }}></div>
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
                <div className="relative flex flex-col m-6 space-y-8 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0">
                    <div className="flex flex-col justify-center p-8 md:p-14">
                        <h1> User profile {session?.user.name} </h1>
                    </div>
                </div>
            </div>
        </main>
    );
}


