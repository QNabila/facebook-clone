import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google";
export default NextAuth({
  // Configure one or more authentication providers
    providers: [
      GoogleProvider({
        clientId: process.env.GOOGLE_ID,
        clientSecret: process.env.GOOGLE_SECRET,
        // authorizationUrl:
        //   "https://accounts.google.com/o/oauth2/v2/auth?prompt=consent&access_type=offline&response_type=code",
        authorization: {
          params: {
            prompt: "consent",
            access_type: "offline",
            response_type: "code"
          }
        }
        
      }),
  ],
  // jwt: {
  //   encryption: true
  // },
  // secret: process.env.secret,
  // callbacks: {
  //     async jwt(token, account) {
  //       if (account ?.accessToken) {
  //         token.accessToken = account.accessToken
  //       }
  //       return token;
  //     },
  //     redirect: async (url, _baseUrl)=>{
  //       if (url === '/Login') {
  //         return Promise.resolve('/')
  //       }
  //       return  Promise.resolve('/')
  //     }
  // }
  
 
  //   callbacks: {
  //     async signIn({ account, profile }) {
  //       if (account.provider === "google") {
  //         return profile.email_verified && profile.email.endsWith("@example.com")
  //       }
  //       return true // Do different verification for other providers that don't have `email_verified`
  //     },
  // }
    
 
  

  });
