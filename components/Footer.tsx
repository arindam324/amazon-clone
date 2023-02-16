import router from "next/router";

const Footer = () => {
    return (
        <footer className={"absolute bottom-0 py-4 text-sm place-items-center text-center grid gap-7 px-8 grid-cols-2  bg-[#232e3f] text-white"}>

            <h2 onClick={() => router.push("/")}>
                Your Amazon.in
            </h2>
            <h2>
                Your Orders
            </h2>
            <h2>Amazon Pay</h2>
            <h2>Amazon App Download</h2>
            <h2>Wish List</h2>
            <h2>Find a Wish List</h2>
            <h2>Your Account</h2>
            <h2>YOur Recently VIewed Items</h2>
            <h2>Returns</h2>
            <h2>Sell</h2>
        </footer>
    )
}


export default Footer