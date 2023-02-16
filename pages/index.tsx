import type {GetServerSideProps, NextPage} from "next";
import Head from "next/head";
import Image from "next/image";


const Layout = dynamic(()=>import('../components/Layout'),{
    ssr:false,

})
// import Layout from "../components/Layout";
import Product, {ProductProps} from "../components/Product";


import {collection, getDocs} from "firebase/firestore";
import {db} from "../utils/firebase";
import dynamic from "next/dynamic";

const Home: NextPage<{ data: ProductProps[] }> = ({data}) => {
    console.log(data)
    return (
        <div className="flex min-h-screen flex-col ">
            <Head>
                <title>Amazon Clone</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <Layout>
                <div className="relative lg:mt-20 w-full h-36 lg:h-[300px]">
                    <Image
                        src="https://m.media-amazon.com/images/I/71usv3CIbTL._SX3000_.jpg"
                        fill
                        className="mask_image"
                        alt=""
                    />
                </div>
                <div className={"w-[90%] grid lg:grid-cols-4 gap-8 lg:-mt-16 pb-4 mx-auto space-y-3"}>
                    {data.map((item) => (
                        <Product
                            id={item.id}
                            key={item.id}
                            description={item.description}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                        />
                    ))}
                </div>
            </Layout>
        </div>
    );
};

type Data = {}

export const getServerSideProps: GetServerSideProps = async () => {
    // Fetch the data from the "data" collection in Firebase
    const querySnapshot = await getDocs(collection(db, "products"));
    // Map the query snapshot to an array of data objects
    const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
    })) as Data[];

    return {
        props: {
            data,
        },
    };
};

export default Home;
