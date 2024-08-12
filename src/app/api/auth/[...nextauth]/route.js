import bcrypt from "bcrypt";
import { connectDB } from "@/lib/connectDB";
import NextAuth from "next-auth/next";
import CredentialProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60,
  },
  providers: [
    CredentialProvider({
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials) {
        const { email, password } = credentials;
        if(!email || !password){
          return null
        }
        const db = await connectDB();
        const currentUser = await db.collection('users').findOne({email: email})
        if (!currentUser) {
          return null;
        }
        const passwordMatched = bcrypt.compareSync(password, currentUser?.password)
        if (!passwordMatched) {
          return null;
        }
        return currentUser;
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
});

export { handler as GET, handler as POST };
