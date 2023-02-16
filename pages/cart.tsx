import {useContext} from 'react'
import Layout from '../components/Layout'
import {ShoppingCartContext} from "../context/ShoppingCardContext";
import Image from 'next/image'

const Cart = () => {
    const {items} = useContext(ShoppingCartContext)
    return (
        <div className={"w-full min-h-screen"}>
            <Layout>
                <div className={"mt-4 lg:mt-0 w-full"}>
                    {items.map(item => (
                        <div className={"flex flex-col lg:flex-row pt-12 mx-auto lg:space-x-8 lg:justify-center max-w-6xl  items-center p-4"}
                             key={item.item.id}>
                            <div className={"relative  w-20 h-20 lg:h-[600px] lg:w-[600px] "}>
                                <Image src={item.item.image} className={"object-contain "} fill alt={""}/>
                            </div>
                            <div>
                                <p className={"text-sm lg:text-2xl w-full lg:max-w-[70%]"}>{item.item.description}</p>
                                <div className={"w-full mt-2 flex items-center space-x-4"}>
                                    <p className={"text-xl font-semibold"}>{`₹${item.item.price}`}</p>
                                    <p>Quality:<span className={"font-semibold"}> {item.quantity}</span></p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Layout>
        </div>
    )
}


export default Cart