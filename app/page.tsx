'use client'
import React from "react";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Itemstats from "@/components/Itemstats";
import PlayerStats from "@/components/playerStats";
import '@fortawesome/fontawesome-svg-core/styles.css'

export default function Home() { 
    return (
    <>
      <Hero/>
      <Features/>
      <Itemstats/>
      <PlayerStats/>
      
    </>
  );
}
