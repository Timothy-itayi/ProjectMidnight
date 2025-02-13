"use client";
import React, { useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "../../client-side-components/side-bar";
import { IconShoppingCart, IconBrandTabler, IconInfoCircle, IconAddressBook } from "@tabler/icons-react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "../../../utils/cn";
import { Card, Carousel } from "@/client-side-components/carousel-card";

const Home = () => {

  const [open, setOpen] = useState(false);

  return (
    <div
      className={cn(
        "rounded-md flex flex-col md:flex-row bg-gray-100 dark:bg-neutral-800 w-full flex-1 max-w-7xl mx-auto border border-neutral-200 dark:border-neutral-700 overflow-hidden",
        "h-screen" // Updated to fill the viewport height
      )}
    >
      <Sidebar open={open} setOpen={setOpen}>
        <SidebarBody className="justify-between gap-10">
          <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
            {open ? <Logo /> : <LogoIcon />}
            <div className="mt-8 flex flex-col gap-2">
              {links.map((link, idx) => (
                <SidebarLink key={idx} link={link} />
              ))}
            </div>
          </div>
          <div>
            <SidebarLink
              link={{
                label: "Register",
                href: "/register",
                icon: (
                  <Image
                    src="/placeholder/products.png"
                    className="h-7 w-7 flex-shrink-0 rounded-full"
                    width={50}
                    height={50}
                    alt="Avatar"
                  />
                ),
              }}
            />
          </div>
        </SidebarBody>
      </Sidebar>
      <Dashboard />
    </div>
  );
};

export default Home;
  // Sidebar.tsx //

export const Logo = () => {
  return (
    <Link
      href="#"
      className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
    >
      <div className="h-5 w-6 bg-black dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" />
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="font-medium text-black dark:text-white whitespace-pre"
      >
        RaceReady Gear
      </motion.span>
    </Link>
  );
};

export const LogoIcon = () => {
  return (
    <Link
      href="#"
      className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
    >
      <div className="h-5 w-6 bg-black dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" />
    </Link>
  );
};


const Dashboard = () => {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} layout={true} />
  ));

  return (
   <div className="w-full h-full py-20">
  <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
  Premium F1 Apparel & Accessories
  </h2>
  <Carousel items={cards} />
</div>
   
  );
};
  // Sidebar.tsx //


// Carousel.tsx // 

const Content = () => {
  return (
    <>
      {[...new Array(3).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] p-8 md:p-14 rounded-3xl mb-4 flex flex-row" 
          >
            <p className="text-neutral-600 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 flex justify-center">
              RaceReady Gear
              </span>{" "}
              Unleash Your Speed: Premium F1 Apparel & Accessories
            </p>
            <Image
              src="/placeholder/f1.jpeg"
              alt="placeholder"
              height="50"
              width="50"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            />
          </div>
        );
      })}
    </>
  );
};

// Carousel.tsx // 

const data = [


  {
    category: "Helmet",
    title: "Products ",
    src: '/placeholder/product1.avif',
    content: <Content />,
  },
  {
    category: "Legend",
    title: "Sim Racing",
    src: '/placeholder/product2.avif',
    content: <Content />,
  },
  {
    category: "Racer",
    title: "Apparel",
    src: '/placeholder/product3.avif',
    content: <Content />,
  },
];

// SideBar.tsx
const links = [
  {
    label: "Products",
    href: "/products",
    icon: (
      <IconBrandTabler className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
    ),
  },
  {
    label: "Cart",
    href: "/cart",
    icon: (
      <IconShoppingCart className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
    ),
  },
  {
    label: "Contact",
    href: "/contact",
    icon: (
      <IconInfoCircle className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
    ),
  },
  {
    label: "About",
    href: "/about",
    icon: (
      <IconAddressBook className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
    ),
  },
];