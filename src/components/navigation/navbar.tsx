"use client";

import React, { useEffect, useRef } from "react";
import { useMediaQuery } from "@/hooks/use-media-query";
import { Drawer, DrawerContent, DrawerTrigger } from "../ui/drawer";
import { MenuIcon } from "lucide-react";
import Link from "next/link";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectGroup,
  SelectLabel,
} from "@/components/ui/select";
import { useAuthState, useSignOut } from "react-firebase-hooks/auth";
import { auth } from "@/app/(auth)/firebase/config";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import { signOut } from "firebase/auth";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import NavLinks from "./navLinks";
gsap.registerPlugin(ScrollTrigger);

export default function Navbar() {

  
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const [user] = useAuthState(auth);
  const router = useRouter();
  console.log(user);

  const userSession = sessionStorage.getItem("user");

  // if (!user && !userSession) {
  //   router.push("/sign-up");
  // }

  return (
    <nav className="container mx-auto py-[18px] flex justify-between items-center">
      <Link href="/" className="flex items-center gap-2" id="nav-text">
        <Image
          src="/images/aeroview_logo.svg"
          alt="aero view logo"
          width={30}
          height={30}
          className=""
        />
        <h1 className="font-bold">Aeroview</h1>
      </Link>
      {isDesktop ? (
        <NavLinks />
      ) : (
        <div>
          <Drawer>
            <DrawerTrigger>
              <MenuIcon />
            </DrawerTrigger>
            <DrawerContent>Some Content</DrawerContent>
          </Drawer>
        </div>
      )}
    </nav>
  );
}
