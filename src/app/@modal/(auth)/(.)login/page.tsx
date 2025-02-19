"use client";

import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { auth } from "@/app/(auth)/firebase/config";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  username: z.string(),
  password: z.string(),
});

export default function LoginModal() {
  const router = useRouter();
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (dialog) {
      dialog.showModal();
    }
  }, []);

  const closeModal = () => {
    dialogRef.current?.close(); // Close modal without navigating back
  };

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const userCredential = await signInWithEmailAndPassword(
        values.username,
        values.password
      );

      if (!userCredential) {
        throw new Error("Sign-in failed. Please check your credentials.");
      }
      sessionStorage.setItem("user", "true");

      console.log("User signed in:", userCredential);
      toast.success("Successfully signed in!");

      form.reset();

      router.push("/");
    } catch (error) {
      console.error("Login error:", error);
      toast.error("Failed to sign in. Please try again.");
    }
  }

  return (
    <dialog
      ref={dialogRef}
      onClose={closeModal}
    >
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 w-full  py-10 px-10 bg-white shadow-md rounded-lg"
        >
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="block text-sm font-medium text-gray-700">
                  Username
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter your username"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    type="text"
                    {...field}
                  />
                </FormControl>
                <FormDescription className="text-sm text-gray-500">
                  This is your public display name.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="block text-sm font-medium text-gray-700">
                  Password
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Password"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    type="password"
                    {...field}
                  />
                </FormControl>
                <FormDescription className="text-sm text-gray-500">
                  Enter your Password
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Submit
          </Button>
          <button
            type="button"
            onClick={closeModal}
            className="mt-2 px-4 py-2 bg-gray-500 text-white rounded-md"
          >
            Close
          </button>
        </form>
      </Form>
    </dialog>
  );
}
