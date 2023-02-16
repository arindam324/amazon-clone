import '../styles/globals.css'
import type {AppProps} from 'next/app'

import {AuthProvider} from '../context/UserContext'
import ShoppingCartProvider from '../context/ShoppingCardContext'
import PageTransition from "../components/PageTransition";

function MyApp({Component, pageProps}: AppProps) {
    return (
        <AuthProvider>
            <PageTransition>
                <ShoppingCartProvider>
                    <Component {...pageProps} />
                </ShoppingCartProvider>
            </PageTransition>
        </AuthProvider>
    )
}

export default MyApp
