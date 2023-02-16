import React, {useContext, useState} from "react";
import {collection, doc, getDoc, getDocs} from "firebase/firestore";
import Image from 'next/image'
import {db} from "../utils/firebase";
import {GetStaticPaths, GetStaticProps} from "next";
import {ParsedUrlQuery} from "querystring";
import {ProductProps} from "../components/Product";
import {useRouter} from "next/router";
import Layout from "../components/Layout";
import NumberSelect from '../components/NumberSelect'
import {ShoppingCartContext} from "../context/ShoppingCardContext";
import {AuthContext} from "../context/UserContext";


const Id: React.FC<{ data: ProductProps }> = ({data}) => {
    const router = useRouter();
    const [quantity, setQuantity] = useState<number>(1)

    if (router.isFallback) {
        return <div>Loading...</div>;
    }

    const {authUser} = useContext(AuthContext)
    const {addItem} = useContext(ShoppingCartContext)

    const saveTOBasket = () => {
        if (authUser) {
            addItem({
                id: data.id,
                description: data.description,
                price: data.price,
                image: data.image
            })
        } else {
            router.push("/login")
        }
    }

    return (
        <div className="flex min-h-screen flex-col">
            <Layout>
                <div className={"flex items-center pb-16 justify-center min-h-[60vh]"}>
                    <div
                        className={"flex lg:mt-32 w-full mt-6 lg:max-w-[1200px] w-full lg:flex-row flex-col lg:justify-center items-center px-4"}>
                        <div className={"relative h-52 w-52 lg:w-[800px] lg:w-[800px]"}>
                            {data?.image && <Image className={"object-contain"} src={data.image} alt={""} fill/>}
                        </div>
                        <div>
                            <p className={" text-gray-500"}>{data?.description}</p>
                            <NumberSelect value={quantity} onChange={setQuantity} label={"In Stock"}/>
                            <div className={"flex flex-col w-full  mt-6 space-y-4"}>
                                <button className={"w-full py-2 bg-yellow-500 rounded-md"}>Buy now</button>
                                <button onClick={saveTOBasket} className={"w-full py-2 bg-orange-500 rounded-md"}>Add to
                                    Cart
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </div>
    )
}

interface Params extends ParsedUrlQuery {
    id: string;
}

type Data = {}


export const getStaticPaths: GetStaticPaths = async () => {

    const collectionRef = collection(db, "products");
    const collectionSnapshot = await getDocs(collectionRef);

    const paths = collectionSnapshot.docs.map((doc) => ({
        params: {
            id: doc.id.toString(),
        },
    }));

    return {
        paths,
        fallback: true,
    };
};

export const getStaticProps: GetStaticProps<{ data: Data }, Params> = async ({params}) => {
    if (!params?.id) {
        return {
            notFound: true,
        }
    }
    // Fetch the data object from Firebase with the given ID
    const docRef = doc(db, "products", params.id);
    const docSnapshot = await getDoc(docRef);

    if (!docSnapshot.exists()) {
        // Return a 404 page if the data object does not exist
        return {
            notFound: true,
        };
    }
    // Return the data object as props
    const data = {
        id: docSnapshot.id,
        ...docSnapshot.data(),
    }

    return {
        props: {
            data,
        },
    };
};

export default Id