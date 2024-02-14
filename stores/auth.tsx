"use client"
import { Session, User } from '@supabase/supabase-js';
import { useContext, useState, useEffect, createContext } from 'react';
import { supabase } from '@/lib/supabase';
// create a context for authentication
const AuthContext = createContext<{ session: Session | null | undefined, user: User | null | undefined, signOut: () => void }>({ session: null, user: null, signOut: () => { } });



export const AuthProvider = ({ children }: any) => {
    const [user, setUser] = useState<User>()
    const [session, setSession] = useState<Session | null>();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const setData = async () => {
            const { data: { session }, error } = await supabase.auth.getSession()
            if (error) throw error;
            setSession(session)
            setUser(session?.user)
            setLoading(false);
        };

        const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
            setSession(session);
            setUser(session?.user)
            setLoading(false)
        });

        setData();
        return () => {
            listener?.subscription.unsubscribe();
        };
    }, []);

    console.log(user)


    const value = {
        session,
        user,
        signOut: () => supabase.auth.signOut(),
    };

    // use a provider to pass down the value
    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
};


export const useLogin = () => useContext(AuthContext)

export default AuthProvider

// Try to sign up here and store the data in ther in stead of the funciton of auth?
// WHy tr wehn authenticate then call back the data from supabase