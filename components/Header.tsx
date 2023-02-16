import React, {FormEvent, useContext, useState} from "react";
import {
    Bars3Icon,
    ShoppingCartIcon,
    UserIcon,
    MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";

import Image from "next/image";

import MobileMenu from "../components/MobileMenu";
import {useRouter} from "next/router";
import {AuthContext} from "../context/UserContext";
import {ShoppingCartContext} from "../context/ShoppingCardContext";


const Header = () => {
    const router = useRouter()
    const [open, setIsOpen] = useState<boolean>(false);

    const [searchValue, setSearchValue] = useState<string>("")
    const handleSearch = () => {
        router.push(`https://www.amazon.in/s?k=${searchValue}`)
    }

    const {authUser} = useContext(AuthContext)
    const {items} = useContext(ShoppingCartContext)

    return (
        <header className="bg-gray-800 px-2 py-3 text-white w-full ">
            <MobileMenu open={open} setIsOpen={setIsOpen}/>
            <div className="flex justify-between w-full items-center">
                <div className="flex space-x-4 items-center">
                    <Bars3Icon className="h-6" onClick={() => setIsOpen(!open)}/>

                    <div onClick={() => router.push("/")} className="w-24 h-7 relative">
                        <Image
                            fill
                            src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                            alt=""
                        />
                    </div>

                </div>
                <div className="flex items-center space-x-3 justify-between">
                    <div className="flex items-center">
                        {!authUser ? (
                            <span onClick={() => router.push("/login")}
                                  className="whitespace-nowrap text-sm">Sign In</span>
                        ) : (
                            <span>{authUser.email.split("@")[0]}</span>
                        )}

                        <UserIcon className="h-6"/>
                    </div>
                    <div onClick={() => router.push("/cart")}>
                        <div className={"bg-yellow-400 grid place-items-center w-6 h-6 rounded-full"}>
                            {items?.length}
                        </div>
                        <ShoppingCartIcon className="h-6"/>
                    </div>

                </div>
            </div>
            <div className=" mt-2 rounded-md bg-white flex">
                <input value={searchValue} onChange={(e) => setSearchValue(e.target.value)}
                       className="w-full text-black px-2 rounded-md focus:outline-none"/>
                <div onClick={handleSearch}
                     className="bg-[#febd69] rounded-md text-black w-10 h-10 grid place-items-center">
                    <MagnifyingGlassIcon className="h-6"/>
                </div>
            </div>
            <div className="text-white mt-2 flex items-center space-x-6">
                <div className="flex flex-col items-center">
                    <span className="text-xs">Shop By</span>
                    <p>Category</p>
                </div>
                <div>
                    <p>Wish List</p>
                </div>
                <div>
                    <p>Deals</p>
                </div>
                <div>Sell</div>
            </div>
        </header>
    );
};

export default Header;
