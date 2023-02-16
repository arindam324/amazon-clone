import React, {ReactNode} from "react";

import Header from "../components/Header";
import Footer from '../components/Footer'

import {} from 'react-use'

const Layout: React.FC<{ children: ReactNode }> = ({children}) => {
    
    return (
        <main className={"relative pb-72"}>
            <Header/>
            {children}
            <Footer/>
        </main>
    );
};

export default Layout;
