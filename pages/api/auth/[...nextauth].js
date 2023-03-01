import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

export const authOptions = {
  pages: {
    signIn: '/login'
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      // credentials: {
      //   username: { label: "Username", type: "text", placeholder: "jsmith" },
      //   password: { label: "Password", type: "password" }
      // },

      async authorize(credentials, req) {
        // console.log('credentials',credentials);
        if(credentials.username === 'abc' && credentials.password.toString() === '123') {
          return {
            user1: {
              name: 'ABC',
              age: 32,
              gender:'man'
            }
          }
        }

        return null;
      }
    })
  ],
};

export default NextAuth(authOptions);