"use client";
import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  useEffect(() => {
    gsap.to(".section", {
      yPercent: -100 * (document.querySelectorAll(".section").length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: ".container",
        start: "top top",
        end: "+=3000", // Adjust based on the number of sections
        scrub: 1,
        pin: true,
      },
    });
  }, []);

  return (
    <div className="container">
      <section className="section h-[100vh] w-full bg-white dark:bg-black flex items-center justify-center">
        <p className="dark:text-white text-neutral-600 text-center text-4xl font-bold">
          E-Commerce Project
        </p>
      </section>
      <section className="section h-[100vh] w-full bg-gray-100 dark:bg-gray-900 flex items-center justify-center">
        <p className="dark:text-white text-neutral-600 text-center text-4xl font-bold">
          Section 2
        </p>
      </section>
      <section className="section h-[100vh] w-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center">
        <p className="dark:text-white text-neutral-600 text-center text-4xl font-bold">
          Section 3
        </p>
      </section>
      <section className="section h-[100vh] w-full bg-gray-300 dark:bg-gray-700 flex items-center justify-center">
        <p className="dark:text-white text-neutral-600 text-center text-4xl font-bold">
          Section 4
        </p>
      </section>
    </div>
  );
};

export default Home;
