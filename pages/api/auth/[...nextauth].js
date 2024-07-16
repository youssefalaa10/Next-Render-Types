import nextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
export default nextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
    }),
  ],
});
