"use client";

import React, { useEffect } from "react";
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
import { signOut } from "firebase/auth";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function NavLinks() {
  const [user] = useAuthState(auth);
  const router = useRouter();
  // console.log(user);
  const userSession = sessionStorage.getItem("user");


  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      "#nav-text",
      { scale: 0.2, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 1.5,
        ease: "expo.in",
      }
    );
  }, []);

  return (
    <div className="flex justify-between items-center gap-[10rem] z-10">
      <ul className="flex justify-between items-center gap-8">
        <li id="nav-text" className="text-sm font-medium ">
          <Link href="">About</Link>
        </li>
        <li id="nav-text" className="text-sm font-medium ">
          <Link href="">Reviews</Link>
        </li>
        <li id="nav-text" className="text-sm font-medium ">
          <Link href="">How it Works</Link>
        </li>
        <li id="nav-text" className="text-sm font-medium ">
          <Link href="">Support</Link>
        </li>
        <li>
          <Select>
            <SelectTrigger className="w-[180px]" id="nav-text">
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
    </div>
  );
}
