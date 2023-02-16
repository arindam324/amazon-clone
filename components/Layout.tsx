import React, {lazy, Suspense, ReactNode} from "react";

import Header from "../components/Header";
import Footer from '../components/Footer'

import {useMedia} from 'react-use'

const DesktopHeader = lazy(() => import('./DesktopHeader'))

// import DesktopHeader from "./DesktopHeader";

const Layout: React.FC<{ children: ReactNode }> = ({children}) => {

    const isLarge = useMedia("(min-width:1080px)")

    console.log(isLarge)

    return (
        <main className={"relative pb-72 min-h-screen"}>
            <Suspense fallback={null}>
                {isLarge ? <DesktopHeader/> : <Header/>}
            </Suspense>

            {children}
            <Footer/>
        </main>
    );
};

export default Layout;
