'use client'
import React , {useEffect, useState} from 'react';
import Link from 'next/link';
import { signIn, signOut, useSession } from 'next-auth/react';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useRouter } from 'next/navigation';

export default function Login() {
    
    const router = useRouter();
    const {data: session , status} = useSession();

    const supabase = createClientComponentClient();    
    const [loading, setLoading] = useState(false);

    const handleSignUp = async () =>{
        await supabase.auth.signUp({
            email: "kimmy10290@hotmail.com",
            password: "123456789",
            options:{
                emailRedirectTo: `${location.origin}/auth/callback`
            }
        });
        router.refresh();
    };

    const handlesignin = async ()=>{
      await supabase.auth.signInWithPassword({
        email: "kimmy10290@hotmail.com",
        password: "123456789",
      });
      router.push('/'); // Example: Redirect to the dashboard page
    }

    const handleSignin = async (provider: string) => {
      try {
        if (!provider) {
          throw new Error('Provider is not specified.');
        }
        
        setLoading(true);
  
        const result = await signIn(provider);
        
        if (!result || !result.ok) {
          throw new Error('Sign-in failed.');
        }
      } catch (error) {
        console.error('Sign-in failed:', error);
        // Handle errors appropriately, e.g., display error message to the user
      } finally {
        setLoading(false);
      }
    };

    if(session){
      console.log("Trigger Rrdirect page to home");
      //router.push('/'); // Example: Redirect to the dashboard page
    }



  return (
    <>
        <main className="h-screen flex items-center justify-center">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/kingforge_nobg.png')", filter: 'brightness(0.8)' }}></div>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="relative flex flex-col m-6 space-y-8 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0">
          <div className="flex flex-col justify-center p-8 md:p-14">
            <span className="md:mt-3 text-4xl font-bold">Welcome Back</span>
            <span className="font-light text-gray-800 md:mt-8">Welcome Back! Please enter your details</span>

            <div className="py-4">
              <label htmlFor="email" className="mb-2 text-md">Email</label>
              <input type="email" className="w-full p-2 border border-gray-300 rounded-md placeholder-font-light placeholder-text-gray-500" name="email" id="email" autoComplete="email" />
          </div>

            <div className="py-4">
              <label htmlFor="password" className="mb-2 text-md">Password</label>
              <input type="password" className="w-full p-2 border border-gray-300 rounded-md placeholder-font-light placeholder-text-gray-500" name="password" id="password" />
            </div>

            <div className="flex justify-between w-full py-4">
              <div className="mr-24">
                <input type="checkbox" name="remember" id="remember" className="mr-2" />
                <label htmlFor="remember" className="text-md">Remember</label>
              </div>
              <span className="font-bold text-black hover:text-red-600 transition-color duration-200 cursor-pointer">Forgot Password</span>
            </div>

            <button className="px-4 bg-black text-white py-2 rounded-lg mb-6 border-green-500 hover:text-white-300 hover:text-white hover:bg-blue-500 transition-all duration-200" onClick={handlesignin}>Sign In</button>
            

            {loading ? (
              <button type="button" className="bg-red-500 text-white px-4 py-2 rounded-md flex items-center justify-center" disabled>
                <svg className="animate-spin h-5 w-5 mr-3 text-white" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A8.003 8.003 0 014 12H0c0 6.627 5.373 12 12 12v-4c-3.313 0-6.287-1.336-8.485-3.515z"></path>
                </svg>
                Processing...
              </button>
            ) : (
              <button className="px-4 bg-black text-white py-2 rounded-lg mb-6 border-green-500 hover:text-white-300 hover:text-white hover:bg-red-500 transition-all duration-200" onClick={() => handleSignin("google")}>
                <img src="/google.png" alt="Google Icon" className="w-6 h-6 inline mr-2" />
                Sign In with Google
              </button>
            )}

            <div className="text-center text-gray-400">
              Don't have an account?{' '}
              <Link href="/signUp" className="font-bold text-black hover:text-emerald-200 transition-color duration-200 cursor-pointer">
                Sign up for free
              </Link>
            </div>



          </div>
          
          <div className="relative">
            <img src="/yinglong_nobg.png" alt="Yinglong Image" className="w-[600px] h-full hidden rounded-r-wxl md:block object-cover" />
            <div className="absolute bottom-10 right-6 p-6 bg-white bg-opacity-30 backdrop-blur-sm rounded drop-shadow-lg w-[600px] h-full hidden">
              <span className="text-white text-xl">Let's Player Monterya open up to a new adventure! and fresh experience of our game</span>
            </div>
          </div>

        </div>
      </div>
    </main>
    </>
  );
}
