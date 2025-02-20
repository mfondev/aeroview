"use client";

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
      <Link href="/" className="flex items-center gap-2">
        <Image
          src="/images/aeroview_logo.svg"
          alt="aero view logo"
          width={50}
          height={50}
          className=""
        />
        <h1>BASIS</h1>
      </Link>
      {isDesktop ? (
        <div className="flex justify-between items-center gap-[10rem]">
          <ul className="flex justify-between items-center gap-8">
            <li>
              <Link href="">About</Link>
            </li>
            <li>
              <Link href="">Reviews</Link>
            </li>
            <li>
              <Link href="">How it Works</Link>
            </li>
            <li>
              <Link href="">Support</Link>
            </li>
            <li>
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="LNG" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="apple">ENG</SelectItem>
                    <SelectItem value="apple">SPN</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </li>
          </ul>
          {!user ? (
            <div className="flex gap-8">
              <Link
                href="login"
                className="bg-[#3661eb] text-white py-4 px-8 rounded-xl"
              >
                Login
              </Link>

              <Link
                href="sign-up"
                className="bg-[#3661eb] text-white py-4 px-8 rounded-xl"
              >
                Sign Up
              </Link>
            </div>
          ) : (
            <button
              className="bg-[#3661eb] text-white py-4 px-8 rounded-xl"
              onClick={() => {
                signOut(auth);
                sessionStorage.removeItem("user");
              }}
            >
              Logout
            </button>
          )}
        </div>
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
