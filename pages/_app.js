/* eslint-disable react/prop-types */
import '../styles/globals.scss'
import { Provider } from 'next-auth/client'
import React from 'react'

function MyApp ({ Component, pageProps }) {
  return (
    <Provider session={pageProps.session}>
            <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
