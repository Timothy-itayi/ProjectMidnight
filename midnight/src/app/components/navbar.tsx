"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "../../client-side-components/nav-bar-menu";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "../../../utils/cn";

gsap.registerPlugin(ScrollTrigger);

const Navbar = ({ className }: { className?: string }) => {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div className={cn("fixed top-10 max-w-screen-xl   inset-x-0 max-w-2xl mx-auto z-50", className)}>
      <Menu  setActive={setActive}>
  
   
        <MenuItem setActive={setActive} active={active} item="Products">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/hobby">Mens</HoveredLink>
            <HoveredLink href="/individual">Womens</HoveredLink>
            <HoveredLink href="/team">Team</HoveredLink>
           
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Contact">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/hobby">LinkedIn</HoveredLink>
            <HoveredLink href="/individual">Github</HoveredLink>
            <HoveredLink href="/team">Email</HoveredLink>
           
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Cart">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/hobby">Empty</HoveredLink>
         
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
};

export default Navbar;
