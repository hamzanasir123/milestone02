"use client"
import React, { useState } from "react";
import { Menu, MenuItem } from "../../ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";



function Header({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
    return (
        <>
        <div
        className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
        >
            <Menu setActive={setActive}>
               <Link href={"/"}>
               <MenuItem setActive={setActive} active={active} item="Home">
               Home
               </MenuItem>
               </Link> 
               <Link href={"#About"}>
               <MenuItem setActive={setActive} active={active} item="About">
               About
               </MenuItem>
               </Link> 
               <Link href={"#Contact"}>
               <MenuItem setActive={setActive} active={active} item="Contact">
               Contact
               </MenuItem>
               </Link> 
            </Menu>
        </div>
        </>
    )
}

export default Header
