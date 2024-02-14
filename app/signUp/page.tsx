'use client';

import { useState } from "react";
import Link from "next/link";
import Modal from "@/components/modal";

export default function SignUpPage(){

  
    const [loading, setLoading] = useState(false);
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [open, setOpen] = useState<boolean>(false);
    const [accepted, setAccepted] = useState(false);

    

    const handleAccept = () => {
      setAccepted(true);
      setOpen(false);
    };
  
    const handleDecline = () => {
      setAccepted(false);
      setOpen(false);
    };


    const handleTogglePasswordVisibility = (field : any) => {
      if (field === 'password') {
        setShowPassword(!showPassword);
      } else if (field === 'confirmPassword') {
        setShowConfirmPassword(!showConfirmPassword);
      }
    };

    const handleSignUp = async () => {
        setLoading(true);
    
        // Your asynchronous server request code goes here
        try {

          if(password != confirmPassword){
            console.log('False');
            return;
          }
          console.log("true")

          // Simulate a server request delay (replace this with your actual server request)
          await new Promise(resolve => setTimeout(resolve, 2000));
    
          // If the server request is successful, you can navigate or handle accordingly
          //alert('Sign Up Successful!');
        } catch (error) {
          // Handle any error from the server request
          console.error('Error:', error);
        } finally {
          setLoading(false);
        }
    };


    return(
        <>
            <main className="h-screen flex items-center justify-center">
            <div className="absolute inset-0 bg-cover bg-center " style={{ backgroundImage: "url('/kingforge_nobg.png')", filter: 'brightness(0.8)' }}></div>



    <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="relative flex flex-col m-6 space-y-8 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0">
        
        <div className="flex flex-col justify-center p-8 md:p-14">
        <span className="md:mt-3 text-4xl font-bold">Sign Up</span>
        <span className="font-light  text-gray-800 md:mt-8">Create your account</span>
        <span className="whitespace-pre ..."> </span>

        {/* Sing up with google! */}
        <button
            onClick={() => {
            // Your code to trigger sign up action
            alert('Sign Up triggered!');
            }}
            className="px-4 bg-white border border-black  text-black py-2 rounded-lg mb-6 hover:text-white-300 hover:text-white hover:bg-red-500 hover:border-transparent transition-all duration-200" >
            <img src="/google.png" alt="img" className="w-6 h-6 inline mr-2" />
            Sign Up with Google
        </button>

        <div className="flex items-center">
            <div className="flex-1 border-t border-black"></div>
            <span className="px-4 ">or</span>
            <div className="flex-1 border-t border-black"></div>
        </div>

        <div className="py-2"> {/*   Hanndle Email */}
            <span className="mb-2 text-md">Email</span>
            <input type="text" className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500" name="email" id="email" />
        </div>

        <div className="py-2">  {/*   Hanndle Passwrod */}
            <span className="mb-2 text-md">Password</span>
            <div className="relative">
              <input type={showPassword ? 'text' : 'password'} value={password} onChange={(e) => setPassword(e.target.value)} className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500 pr-10" name="password" id="password"
              />
              <button type="button" onClick={() => handleTogglePasswordVisibility('password')} className="absolute inset-y-0 right-0 pr-3 flex items-center"
              >
                {showPassword ? (
                  <svg className="h-5 w-5 text-gray-500 cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
                  >
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    ></path>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2 12s3 5.5 10 5.5 10-5.5 10-5.5-3-5.5-10-5.5S2 12 2 12z"
                    ></path>
                  </svg>
                ) : (
                  <svg className="h-5 w-5 text-gray-500 cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
                  >
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    ></path>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2 12s3 5.5 10 5.5 10-5.5 10-5.5-3-5.5-10-5.5S2 12 2 12z"
                    ></path>
                  </svg>
                )}
              </button>
            </div>
        </div>

        <div className="py-2"> {/*   Hanndle Confirm Passwrod */}
                <span className="mb-2 text-md">Confirm Password</span>
                <div className="relative">
                <input type={showConfirmPassword ? 'text' : 'password'} value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500 pr-10" name="confirmPassword" id="confirmPassword"
                />
                <button type="button" onClick={() => handleTogglePasswordVisibility('confirmPassword')} className="absolute inset-y-0 right-0 pr-3 flex items-center"
                >
                    {showConfirmPassword ? (
                    <svg className="h-5 w-5 text-gray-500 cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
                    >
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" ></path> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2 12s3 5.5 10 5.5 10-5.5 10-5.5-3-5.5-10-5.5S2 12 2 12z" ></path>
                    </svg>
                    ) : (
                    <svg className="h-5 w-5 text-gray-500 cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
                    >
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" ></path> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2 12s3 5.5 10 5.5 10-5.5 10-5.5-3-5.5-10-5.5S2 12 2 12z" ></path>
                    </svg>
                    )}
                </button>
                </div>
        </div>

                <div className="flex justify-between w-full py-4">

                </div>

                <button
                    onClick={handleSignUp}
                    className={`px-4 bg-black text-white py-2 rounded-lg mb-6 border-green-500 ${
                        loading
                        ? 'cursor-not-allowed opacity-90 bg-blue-500' // The button 
                        : 'hover:text-white-300 hover:text-white hover:bg-blue-500 transition-all duration-200' // The loading spnning
                    }`}
                    disabled={loading}
                    >
                    <div className="flex items-center justify-center">
                        {loading && (
                        <svg className="animate-spin h-5 w-5 mr-3 border-t-2 border-white border-opacity-90 rounded-full text-blue-500" viewBox="0 0 24 24" fill="none" >
                        </svg>
                        )}
                        {loading ? 'Signing Up...' : 'Sign Up'}
                    </div>
                </button>




                 <div className="flex justify-between w-full py-4">
                    <div className="mr-24">
                      <input type="checkbox" name="ch" id="ch" className="mr-2 focus:ring-0"  checked={accepted} onChange={() => setAccepted(!accepted)} />
                      <span className="text-md cursor-pointer hover:text-blue-400" onClick={() => setOpen(true)}>  I accept all terms & conditions </span>
                    </div>
                </div>

                <div className="text-center text-gray-400">
                    Already have an account?
                    <span className="whitespace-pre ..."> </span>
                    <Link href="/login" className="font-bold text-black hover:text-emerald-200 transition-color duration-200 cursor-pointer" > Sign in </Link>
                </div>

                <div>


            <Modal open={open} onClose={() => setOpen(false)}> {/* Handle Modal Itself*/}
                <div className="flex flex-col gap-4">
                <h1 className="text-3xl font-bold mb-4">Monterya Terms of Service and Privacy Policy</h1>
                <p>
                    Welcome to Monterya, the exciting MMORPG that takes you on an epic adventure in a fantastical realm! Before embarking on your journey, please take a moment to review our Terms of Service and Privacy Policy.
                </p>

                <h2 className="text-2xl font-bold mt-4">Terms of Service</h2>
                <p>
                    With the immersive world of Monterya, players engage in thrilling quests, battles, and interactions. To ensure a fair and enjoyable gaming experience, all players are required to comply with our Terms of Service. This includes respecting other players, following the game's guidelines, and adhering to ethical conduct within the Monterya community.
                </p>
                <p>
                    Monterya involves in-game currency, which can be earned through gameplay. Players may also have the option to purchase in-game items or currency using real money. Please review our in-game store policies for details on virtual goods transactions.
                </p>

                <hr className="border-t-solid border-l border-gray my-6" />

                <h2 className="text-2xl font-bold mb-4">Privacy Policy</h2>
                <p>
                    At Monterya, we prioritize the privacy and security of our players. Our Privacy Policy outlines how we collect, use, and protect your personal information. Rest assured, any data collected is handled with the utmost care and is solely used to enhance your gaming experience.
                </p>
                <p>
                    Monterya complies with all applicable data protection laws, including the European Union's General Data Protection Regulation (G.D.P.R.). We are committed to notifying players promptly in the event of high-risk data breaches that could impact their personal information.
                </p>

                <hr className="border-t-solid border-l border-gray my-6" />

                <h2 className="text-2xl font-bold mb-4">In-Game Transactions and Currency</h2>
                <p>
                    Monterya features an in-game economy where players can earn and spend virtual currency. Additionally, players have the option to make real money transactions to enhance their gaming experience by acquiring exclusive items, cosmetics, or other in-game benefits.
                </p>
                <p>
                    We encourage responsible spending, and all transactions are securely processed through trusted payment gateways. Please review our in-game store policies for information on refunds, virtual goods, and the terms associated with real money transactions.
                </p>

                <p className="text-gray-600 mt-6">
                    Monterya reserves the right to update these terms and policies periodically. By continuing to play Monterya, you agree to abide by the most recent version of our Terms of Service and Privacy Policy.
                </p>



                <hr className="border-t-solid border-l border-gray my-6" />

                <div className="flex flex-row">
                  <button
                    className="mr-2 border border-neutral-300 rounded-lg py-1.5 px-8 bg-blue-500 hover:bg-blue-600 text-white"
                    onClick={handleAccept}
                  >
                    Accept
                  </button>

                  <button
                    className="mr-2 border border-neutral-300 rounded-lg py-1.5 px-10 bg-gray-500 hover:bg-gray-400 text-white"
                    onClick={handleDecline}
                  >
                    Decline
                  </button>
                </div>

                </div>
            </Modal>
        </div>
               
                </div> {/* Inner Tag  */}
            </div>
        </div>   {/* End of the Sign in form */}

                          

     

        {/* Start Modal */}        
            </main>

        </>
    )

}