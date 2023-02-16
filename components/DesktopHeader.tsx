import Image from "next/image";
import {useRouter} from "next/router";

import {MagnifyingGlassIcon, ShoppingCartIcon, MapPinIcon} from '@heroicons/react/24/outline'
import {useContext, useState} from "react";
import {AuthContext} from "../context/UserContext";
import {ShoppingCartContext} from "../context/ShoppingCardContext";

const DesktopHeader = () => {
    const router = useRouter()
    const [searchValue, setSearchValue] = useState<string>("")

    const {authUser} = useContext(AuthContext)
    const {items} = useContext(ShoppingCartContext)
    const handleSearch = () => {
        router.push(`https://www.amazon.in/s?k=${searchValue}`)
    }
    return (
        <div className={"bg-gray-800 px-10 text-white py-5 fixed  z-10 w-full"}>
            <div className={"flex gap-10 items-center justify-between"}>
                <div onClick={() => router.push("/")} className="w-32 h-8 relative">
                    <Image
                        fill
                        src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                        alt=""
                    />
                </div>
                <div className={"cursor-pointer flex items-center"}>
                    <MapPinIcon className={"h-6"}/>
                    <div>
                        <p className={"text-sm"}>Hello</p>
                        <h2 className={"text-xl font-bold"}>Select your address</h2>
                    </div>
                </div>
                <div className={"flex-1 flex max-h-[50px] rounded-md items-center bg-white py-4"}>
                    <select className={"form-select w-[5%] h-[50px] rounded-md px-2 bg-gray-400"}>
                        <option value={""}>All</option>
                    </select>
                    <input value={searchValue} onChange={(e) => setSearchValue(e.target.value)}
                           className={"w-[90%] text-black focus:outline-none px-8"}/>
                    <div className={"bg-yellow-400 w-[5%] h-[50px] rounded-md grid place-items-center"}>
                        <MagnifyingGlassIcon className={"h-6"}/>
                    </div>

                </div>
                <div className={"max-w-[300px] flex items-center space-x-8 w-full"}>

                    <div onClick={() => router.push("/")} className={"flex cursor-pointer space-x-2"}>
                        <Image
                            src={"https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Flag_of_India.svg/2560px-Flag_of_India.svg.png"}
                            width={20} height={20} alt={"indian flag"}/>
                        <span className={"font-bold"}>EN</span>
                    </div>
                    {!authUser ? (
                        <span onClick={() => router.push("/login")}
                              className="whitespace-nowrap text-xl cursor-pointer">Sign In</span>
                    ) : (
                        <span>{authUser.email.split("@")[0]}</span>
                    )}

                    <div className={"font-bold"}>
                        <p className={"text-sm"}>Returns</p>
                        <p>& Orders</p>
                    </div>
                    <div className={"cursor-pointer"} onClick={() => router.push("/cart")}>
                        <div className={"bg-yellow-400 grid place-items-center w-6 h-6 rounded-full"}>
                            {items?.length}
                        </div>
                        <ShoppingCartIcon className="h-6"/>
                    </div>

                </div>
            </div>
            <div>

            </div>
        </div>
    )
}

export default DesktopHeader