import { v4 as uuid } from "uuid";
import type { IFormInput, IProduct } from "../interfaces";

export const productList: IProduct[] = [
  {
    id: uuid(),
    title: "Wireless Headphones",
    description:
      "Wireless noise-canceling headphones with 30-hour battery life.",
    imageURL:
      "https://media.istockphoto.com/id/1349374810/photo/a-laptop-half-closed-bright-and-glowing.jpg?s=612x612&w=0&k=20&c=DHKajFhP8y_G_61HqwTW3dJ-nZnx_dSt_V8-NI-VkLs=",
    price: "199.99",
    colors: ["#6A0572", "#FF0032", "#1F8A70"],
    category: {
      name: "Electronics",
      imageURL:
        "https://media.istockphoto.com/id/1349374810/photo/a-laptop-half-closed-bright-and-glowing.jpg?s=612x612&w=0&k=20&c=DHKajFhP8y_G_61HqwTW3dJ-nZnx_dSt_V8-NI-VkLs=",
    },
  },
  {
    id: uuid(),
    title: "Gaming Laptop",
    description:
      "High-performance gaming laptop with RTX 4060 and Intel i7 processor.",
    imageURL:
      "https://cdn.cs.1worldsync.com/syndication/mediaserverredirect/d7633989f77e5944e6bb858a02ff0e17/width(1200).jpg",
    price: "1299.99",
    colors: ["#F9DC5C", "#BF3131"],
    category: {
      name: "Electronics",
      imageURL:
        "https://cdn.cs.1worldsync.com/syndication/mediaserverredirect/d7633989f77e5944e6bb858a02ff0e17/width(1200).jpg",
    },
  },
  {
    id: uuid(),
    title: "4K Monitor",
    description: "Ultra HD 4K monitor with IPS panel and HDR support.",
    imageURL:
      "https://storage-asset.msi.com/global/picture/news/2019/monitor/msi-optix-mag321curv-4kgaming-monitor-feature.jpg",
    price: "349.99",
    colors: ["#F9DC5C"],
    category: {
      name: "Electronics",
      imageURL:
        "https://storage-asset.msi.com/global/picture/news/2019/monitor/msi-optix-mag321curv-4kgaming-monitor-feature.jpg",
    },
  },
  {
    id: uuid(),
    title: "Mechanical Keyboard",
    description: "RGB mechanical keyboard with tactile switches.",
    imageURL:
      "data:image/jpeg;base64,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fq5Yjbry5qND2f8AB2/uNx/qP9mkuT1derLgICAg/IVv7MuGOcXG2ySSYqVgJJk4D4HuXdjT0W8L9mP3tb5ibGPRZwv2Y/fV/mJsPRZwv2Y/fV/mJsPRXwv2Y/fV/mJsPRZwv2Y/fV/mJsPRXwv2Y/fV/mJsPRZwv2Y/fV/mJsY9FfCvZj99X+Ymxn0V8K9mP31f5ibD0V8K9lP31f5ibGfRbwv2X9rX+Ymw9FvC/Zf2tf5ibD0W8L9l/a1vmJsZ9F3C/Zf2tb5ibD0X8L9l/a1vmJsZ9F/C/ZR97W+Ymw9GHC/ZR95W/rTYz6MeF+yj7yt/Wmw9GXC/ZR95V/rTYz6MuF+yN+8q/wBa5sPRnwv2Rv69X+tNh6M+F+yN/Xq/1oM+jThfsjP16n9abHc4HwK3s2GlbUm0mF2ogSZcQBJJJJwB9iDooCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIP/Z",
    price: "119.99",
    colors: ["#F9DC5C", "#D4A373", "#BF3131"],
    category: {
      name: "Accessories",
      imageURL:
        "data:image/jpeg;base64,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fq5Yjbry5qND2f8AB2/uNx/qP9mkuT1derLgICAg/IVv7MuGOcXG2ySSYqVgJJk4D4HuXdjT0W8L9mP3tb5ibGPRZwv2Y/fV/mJsPRZwv2Y/fV/mJsPRXwv2Y/fV/mJsPRZwv2Y/fV/mJsPRXwv2Y/fV/mJsPRZwv2Y/fV/mJsY9FfCvZj99X+Ymxn0V8K9mP31f5ibD0V8K9lP31f5ibGfRbwv2X9rX+Ymw9FvC/Zf2tf5ibD0W8L9l/a1vmJsZ9F3C/Zf2tb5ibD0X8L9l/a1vmJsZ9F/C/ZR97W+Ymw9GHC/ZR95W/rTYz6MeF+yj7yt/Wmw9GXC/ZR95V/rTYz6MuF+yN+8q/wBa5sPRnwv2Rv69X+tNh6M+F+yN/Xq/1oM+jThfsjP16n9abHc4HwK3s2GlbUm0mF2ogSZcQBJJJJwB9iDooCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIP/Z",
    },
  },
  {
    id: uuid(),
    title: "Bluetooth Speaker",
    description: "Portable speaker with deep bass and 12-hour battery life.",
    imageURL:
      "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?auto=format&fit=crop&w=800&q=80",
    price: "79.99",
    colors: ["#000000", "#C0C0C0", "#BF3131"],
    category: {
      name: "Electronics",
      imageURL:
        "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?auto=format&fit=crop&w=800&q=80",
    },
  },
  {
    id: uuid(),
    title: "Smartphone",
    description: "Latest smartphone with advanced features and sleek design.",
    imageURL:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80",
    price: "899.99",
    colors: ["#A31ACB", "#141E46", "#1F8A70"],
    category: {
      name: "Electronics",
      imageURL:
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80",
    },
  },
  {
    id: uuid(),
    title: "Drone Camera",
    description: "4K drone with GPS, auto-return, and gesture control.",
    imageURL:
      "https://images.unsplash.com/photo-1508614999368-9260051294da?auto=format&fit=crop&w=800&q=80",
    price: "499.99",
    colors: ["#000000", "#C0C0C0"],
    category: {
      name: "Electronics",
      imageURL:
        "https://images.unsplash.com/photo-1508614999368-9260051294da?auto=format&fit=crop&w=800&q=80",
    },
  },
];

export const formInputList: IFormInput[] = [
  {
    id: "title",
    name: "title",
    label: "Product Title",
    type: "text",
  },
  {
    id: "description",
    name: "description",
    label: "Product Description",
    type: "text",
  },
  {
    id: "image",
    name: "imageURL",
    label: "Product Image URL",
    type: "text",
  },
  {
    id: "price",
    name: "price",
    label: "Price",
    type: "text",
  },
  // {
  //   id: "colors",
  //   name: "colors",
  //   label: "Available Colors",
  //   type: "text",
  // },
  // {
  //   id: "category",
  //   name: "category.name",
  //   label: "Category Name",
  //   type: "text",
  // },
  // {
  //   id: "categoryImage",
  //   name: "category.imageURL",
  //   label: "Category Image URL",
  //   type: "text",
  // },
];

export const colors = [
  "#000000",
   "#D4A373", // Warm Tan
  "#C0C0C0",
  "#808080",
  "#3C2A21", // Dark Brown
  "#820000", // Dark Red
  "#FF0032", // Bright Red
  "#29C7AC", // Aqua
  "#BF3131", // Deep Red
  "#FFC857", // Golden Yellow
  "#FF6F61", // Coral
  "#00B8A9", // Teal
];
