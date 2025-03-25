import { loginUser } from "@/app/actions/auth/loginUser";
import dbConnect from "@/lib/dbConnect";
import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

const authOptions = {
    secret: process.env.NEXTAUTH_SECRET,
    providers: [
        CredentialsProvider({
          // The name to display on the sign in form (e.g. "Sign in with...")
          name: "Credentials",
          // `credentials` is used to generate a form on the sign in page.
          // You can specify which fields should be submitted, by adding keys to the `credentials` object.
          // e.g. domain, username, password, 2FA token, etc.
          // You can pass any HTML attribute to the <input> tag through the object.
          // credentials: {
          //   username: { label: "Username", type: "text", placeholder: "jsmith" },
          //   password: { label: "Password", type: "password" }
          // },
          async authorize(credentials, req) {
            // Add logic here to look up the user from the credentials supplied
            const user = await loginUser(credentials);
            console.log("user from authorize section", user)
      
            if (user) {
              // Any object returned will be saved in `user` property of the JWT
              return user
            } else {
              // If you return null then an error will be displayed advising the user to check their details.
              return null
      
              // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
            }
          }
        }),
        GoogleProvider({
          clientId: process.env.GOOGLE_CLIENT_ID,
          clientSecret: process.env.GOOGLE_CLIENT_SECRET
        })
      ],
        callbacks: {
          async signIn({ user, account, profile, email, credentials }) {
              if (account) {
                  // try {
                  //     console.log("FROM SIGNIN CALLBACK", user)
                  //     const {  provider } = account
                  //     const { email, name } = user
                  //     const payload = { provider, email, image, name }
                  //     console.log("FROM SIGNIN CALLBACK Payload", payload)
                  //     const userCollection = dbConnect("users")
                  //     const isUserExist = await userCollection.findOne({ email })
                  //     if (!isUserExist) {
                  //         await userCollection.insertOne(payload)
                  //     }
                  // } catch (error) {
                  //     console.log(error)
                  //     return false;
                  // }
              }
  
              return true
          },
          async session({ session, token, user }) {

              if (token) {
                  session.user.name = token.name;
                  session.user.role = token.role
              }
              console.log("FROM SESSION CALLBACK", session)
              return session
          },
          async jwt({ token, user, account, profile, isNewUser }) {
            
              if (user) {
                console.log("FROM JWT CALLBACK", user)
                  token.name = user.name
                  token.role = user.role
              }
              return token
          }
      },
      
    pages: {
        signIn: "/login",
        // signOut: "/logout",
        // error: "/login",
        // verifyRequest: "/login",
        // newUser: null
    },
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }