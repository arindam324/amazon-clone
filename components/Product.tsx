import Image from "next/image";
import router from "next/router";
import React from "react";

import StarRating from "./StarRating";

export type ProductProps = {
  id: string;
  image: string;
  description: string;
  price: number;
  rating: number;
  oldPrice: number;
};

const Product: React.FC<ProductProps> = ({
  image,
  id,
  description,
  price,
  rating,
  oldPrice,
}) => {
  return (
    <article
      onClick={() => router.push(`/${id}`)}
      className="w-full w-[90%] mx-auto flex lg:max-w-[400px] cursor-pointer lg:py-10 flex-col items-center px-4 py-8 rounded-md shadow-lg"
    >
      <div className="relative h-40 w-40">
        <Image src={image} className={"object-contain"} fill alt="" />
      </div>
      <p className={"text-sm mt-2"}>{description}</p>
      <div className={"flex items-center justify-between mt-2 w-full"}>
        <div className="flex items-center space-x-4">
          <p className="text-red-600 text-lg line-through font-bold ">
            {oldPrice}
          </p>
          <h2 className={"text-2xl  font-bold"}>{`₹${price}`}</h2>
        </div>
        <StarRating rating={rating} />
      </div>
    </article>
  );
};

export default Product;
