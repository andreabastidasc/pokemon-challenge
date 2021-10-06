import NextAuth from "next-auth"
import Providers from 'next-auth/providers'

export default NextAuth({
    // Configure one or more authentication providers
    providers: [
        Providers.Credentials({
            id: 'signin-credentials',
            name: 'SingInCredentials',
            async authorize(credentials, req) {
              console.log(credentials, 'credenciales')
              return credentials
            },
        }),
    ],

    session: {
        jwt: true,
      },
    jwt: {},

    secret: process.env.SECRET,

    callbacks: {
        async signIn( user, account, profile, email, credentials) {
            
            console.log(user, 'user signIn')
            
            return true
        },
        async redirect( url, baseUrl ) {
            return baseUrl
        },
        async session( session, user, token) {
            console.log(session, 'session')
            console.log(user, 'user session')
            console.log(token, 'token session')
          return session
        },
        async jwt( token, user, account, profile, isNewUser ) {
            console.log(user, 'usuario')
            console.log(token, 'token')
            
          return token
        }
    }
})
