"use client";

import { useState } from "react";
import SplashScreen from "./SplashScreen";
import HeroSection from "./HeroSection";
import PersonnelCarousel from "./PersonnelCarousel";

export default function SiteExperience() {
  const [entered, setEntered] = useState(false);

  return (
    <>
      {!entered && <SplashScreen onEnter={() => setEntered(true)} />}
      <main className={entered ? "opacity-100" : "opacity-0"}>
        <HeroSection />
        <PersonnelCarousel />
      </main>
    </>
  );
}
