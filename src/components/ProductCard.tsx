import type { IProduct } from "../interfaces";
import { txtSlicer } from "../utils/functions";
import Image from "./Image";
import Button from "./ui/Button";

interface IProps {
  product: IProduct;
}

export default function ProductCard({ product }: IProps) {
  const { title, description, imageURL, price, category } = product;
  return (
    <div className="max-w-sm md:max-w-lg mx-auto md:mx-0 border rounded-md p-2 flex flex-col">
      <Image
        imageURL={imageURL}
        alt="Product Name"
        className="rounded-md mb-2 h-52 w-full lg:object-cover"
      />

      <h3>{title}</h3>
      <p>{txtSlicer(description)}</p>

      <div className="flex items-center my-4 space-x-2">
        <span className="w-5 h-5 bg-indigo-600 rounded-full cursor-pointer" />
        <span className="w-5 h-5 bg-yellow-600 rounded-full cursor-pointer" />
        <span className="w-5 h-5 bg-red-600 rounded-full cursor-pointer" />
      </div>

      <div className="flex items-center justify-between">
        <span>{price}</span>
        <Image
          imageURL={category.imageURL}
          alt="Product Name"
          className="w-10 h-10 rounded-full"
        />
      </div>

      <div className="flex items-center justify-between space-x-2 mt-5">
        <Button className="bg-indigo-700 hover:bg-indigo-800">EDIT</Button>
        <Button className="bg-red-700 hover:bg-red-800">DELELTE</Button>
      </div>
    </div>
  );
}
