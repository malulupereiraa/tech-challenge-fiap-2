/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import NextAuth from "next-auth";
import axios from "axios";
import CredentialsProvider from "next-auth/providers/credentials";
import { NextAuthOptions } from "next-auth";

export const authOptions : NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "email" },
        password: { label: "Password", type: "password", placeholder: "*****" },
      },

      authorize: async (credentials, req) => {
        // Include hidden values here
        if (!credentials) {
          return null;
        }

        const data = {
          email: credentials.email,
          password: credentials.password,
        };

        const api_url =
          process.env.NEXTAUTH_URL ||
          process.env.NEXT_PUBLIC_NEXTAUTH_URL

        try {
          const res: any = await axios.post(`${api_url}/api/users/login`, data);
          const resData = res.data;

          if (resData) {
            return resData;
          } else {
            console.error("Authorization failed:", resData);
            return null;
          }
        } catch (error) {
          console.error("Authorization error:", error);
          return null;
        }
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/",
    error: "/auth/error",
  },
  session: { strategy: "jwt" },
  callbacks: {
    async jwt({ token, user, trigger, session }) {
      if (trigger === "update" && session) {
        return { ...token, ...session?.user };
      }
      return { ...token, ...user };
    },
    async session({ session, token, user }) {
      session.user = token as any;
      return session;
    }
  }
};

export default NextAuth(authOptions)
