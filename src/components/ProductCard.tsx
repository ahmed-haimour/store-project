import type { IProduct } from "../interfaces";
import { txtSlicer } from "../utils/functions";
import CircleColor from "./CircleColor";
import Image from "./Image";
import Button from "./ui/Button";

interface IProps {
  product: IProduct;
}

export default function ProductCard({ product }: IProps) {
  const { title, description, imageURL, price, colors, category } = product;

  const renderProductColor = colors.map((color) => (
    <CircleColor key={color} color={color} />
  ));

  return (
    <div className="max-w-sm md:max-w-lg mx-auto md:mx-0 border rounded-md p-2 flex flex-col">
      <Image
        imageURL={imageURL}
        alt="Product Name"
        className="rounded-md mb-2 h-52 w-full lg:object-cover"
      />

      <h3>{title}</h3>
      <p>{txtSlicer(description)}</p>

      <div className="flex items-center my-4 flex-wrap space-x-1">
        {renderProductColor}
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
