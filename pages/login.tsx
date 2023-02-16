import React, {useContext, useState} from 'react'
import Image from "next/image";
import router from 'next/router';
import {AuthContext} from "../context/UserContext";


const Header = () => {
    const [show, setShow] = useState<boolean>(false)
    const [firstName, setFirstName] = useState<string>("")
    const [lastName, setLastName] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")

    const {signIn} = useContext(AuthContext)

    return (
        <div className={"bg-gray-100 w-full min-h-screen"}>
            <header className={"bg-gray-800 px-4 py-3"}>
                <div onClick={() => router.push("/")} className="w-24 h-7 relative">
                    <Image
                        fill
                        src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                        alt=""
                    />
                </div>
            </header>
            <div
                className={"bg-white space-y-4 p-5 flex flex-col items-center mt-10 py-6 rounded-lg w-[90%] mx-auto"}>
                {!show ? (
                    <>
                        <div className={"space-y-4"}>
                            <input value={email} onChange={(e) => setEmail(e.target.value)} type={"email"}
                                   placeholder={"Email Address"}
                                   className={"border p-2 rounded-md  w-full"}/>
                            <input type={"password"} placeholder={"Password"} value={password}
                                   onChange={(e) => setPassword(e.target.value)}
                                   className={"border p-2  w-full rounded-md"}/>
                            <input type={"submit"}
                                   onClick={() => signIn(email, password)}
                                   value={"sign in"} className={"w-full p-2 rounded-md bg-[#f5d27a] "}/>
                        </div>
                        <p onClick={() => setShow(true)}
                           className={"font-semibold text-sm text-gray-500 underline underline-offset-2"}>New Customer ?
                            sign
                            up</p>
                    </>
                ) : (
                    <>
                        <div>
                            <input type={"text"} value={firstName} onChange={(e) => setFirstName(e.target.value)}
                                   placeholder={"First name"}
                                   className={"border p-2 rounded-md  w-full"}/>
                            <input type={"text"} placeholder={"Last name"} value={lastName}
                                   onChange={(e) => setLastName(e.target.value)}
                                   className={"border p-2 rounded-md  w-full"}/>
                            <input type={"text"} placeholder={"Email Address"}
                                   value={email} onChange={(e) => setEmail(e.target.value)}
                                   className={"border p-2 rounded-md  w-full"}/>
                            <input type={"password"} placeholder={"Password"}
                                   value={password} onChange={(e) => setPassword(e.target.value)}
                                   className={"border p-2  w-full rounded-md"}/>
                            <input type={"submit"} value={"sign in"} className={"w-full p-2 rounded-md bg-[#f5d27a] "}/>
                        </div>
                        <p onClick={() => setShow(false)}
                           className={"font-semibold text-sm text-gray-500 underline underline-offset-2"}>Already a
                            customer</p>
                    </>
                )}

            </div>

        </div>
    )
}

export default Header