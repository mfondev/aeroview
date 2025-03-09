"use client";

import React from "react";
import { useMediaQuery } from "@/hooks/use-media-query";
import { Drawer, DrawerContent, DrawerTrigger } from "../ui/drawer";
import { MenuIcon } from "lucide-react";
import Link from "next/link";
import { useAuthState, useSignOut } from "react-firebase-hooks/auth";
import { auth } from "@/app/(auth)/firebase/config";
import { useRouter } from "next/navigation";
import Image from "next/image";
import NavLinks from "./navLinks";
import { signOut } from "firebase/auth";

export default function Navbar() {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const [user] = useAuthState(auth);
  const router = useRouter();
  // console.log(user);

  // const userSession = sessionStorage.getItem("user");

  // if (!user && !userSession) {
  //   router.push("/sign-up");
  // }

  return (
    <>
<nav className="container mx-auto py-[18px] flex justify-between items-center">
  <Link href="/" className="flex items-center gap-2" id="nav-text">
    <Image
      src="/images/aeroview_logo.svg"
      alt="aero view logo"
      width={30}
      height={30}
    />
    <h1 className="font-bold">Aeroview</h1>
  </Link>

  {isDesktop && <NavLinks />}

  <div>
    {isDesktop ? (
      !user ? (
        <div className="flex gap-8">
          <Link
            href="/login"
            className="bg-[#3661eb] text-white py-3 px-6 rounded-[5px]"
            id="nav-text"
          >
            Login
          </Link>
          <Link
            href="/sign-up"
            className="bg-[#3661eb] text-white py-3 px-6 rounded-[5px]"
            id="nav-text"
          >
            Sign Up
          </Link>
        </div>
      ) : (
        <button
          className="bg-[#3661eb] text-white py-3 px-6 rounded-[5px]"
          id="nav-text"
          onClick={() => {
            signOut(auth);
            sessionStorage.removeItem("user");
          }}
        >
          Logout
        </button>
      )
    ) : (
      <Drawer>
        <DrawerTrigger>
          <MenuIcon />
        </DrawerTrigger>
        <DrawerContent>Some Content</DrawerContent>
      </Drawer>
    )}
  </div>
</nav>

    </>
  );
}
