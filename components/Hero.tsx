import React from 'react'
import { Typography } from '@material-tailwind/react'
import Button from "./Button";
import Image from 'next/image';


const Hero = () => {
  return (
    <div className="relative min-h-screen w-full">
      <Image
        src={"/rabbit_nobg.png"}
        alt="Rabbit Image"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
      />
    <div className="absolute inset-0 h-full w-full bg-gray-900/60" />
    <div className="grid min-h-screen px-8">
      <div className="container relative z-10 my-auto mx-auto grid place-items-center text-center">

        <Typography variant="h1" color="white" className="lg:max-w-3xl" placeholder={""}>
          Monterya
        </Typography>
        <Typography
          placeholder={""}
          variant="lead"
          color="white"
          className="mt-1 mb-12 w-full md:max-w-full lg:max-w-2xl"
        >
          Join us for the adventure that is comming this year - THe Monterya Official 2024!
        </Typography>
        <div className="flex items-center gap-4">
        <a href="#_" className="relative inline-flex items-center justify-center px-10 py-4 overflow-hidden font-mono font-medium tracking-tighter text-white bg-blue-500 rounded-lg group">
          <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-blue-700 rounded-full group-hover:w-56 group-hover:h-56"></span>
          <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
          <span className="relative">Get Started</span>
        </a>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Hero
