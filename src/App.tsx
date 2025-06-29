import { useState, type ChangeEvent, type FormEvent } from "react";
import ProductCard from "./components/ProductCard";
import Modal from "./components/ui/Modal";
import { colors, formInputList, productList } from "./data";
import Button from "./components/ui/Button";
import Input from "./components/ui/Input";
import { v4 as uuid } from "uuid";
import type { IProduct } from "./interfaces";
import { productValidation } from "./validation";
import ErrorMessage from "./components/ErrorMessage";
import CircleColor from "./components/CircleColor";
function App() {
  const defulteProductObj = {
    title: "",
    description: "",
    imageURL: "",
    price: "",
    colors: [],
    category: {
      name: "",
      imageURL: "",
    },
  };

  /*-------------STATE-------------*/
  const [productData, setProductData] = useState<IProduct[]>(productList);
  const [product, setProduct] = useState<IProduct>(defulteProductObj);
  const [tempColors, setTempColors] = useState<string[]>([]);
  const [errors, setErrors] = useState({
    title: "",
    description: "",
    imageURL: "",
    price: "",
  });
  const [isOpen, setIsOpen] = useState(false);

  /*-------------HANDLER-------------*/
  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);

  function onChangeHandler(event: ChangeEvent<HTMLInputElement>) {
    const { value, name } = event.target;

    setProduct({
      ...product,
      [name]: value,
    });

    setErrors({
      ...errors,
      [name]: "",
    });
  }

  function onCancle() {
    console.log("cancle");
    setProduct(defulteProductObj);
    closeModal();
  }

  function submitHandler(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    const { title, description, imageURL, price } = product;

    const errors = productValidation({
      title,
      description,
      imageURL,
      price,
    });

    const hasErrorMsg =
      Object.values(errors).some((value) => value === "") &&
      Object.values(errors).every((value) => value === "");
    console.log(hasErrorMsg);
    if (!hasErrorMsg) {
      setErrors(errors);
      return;
    }

    setProductData((prev) => [
      { ...product, id: uuid(), colors: tempColors },
      ...prev,
    ]);
    setProduct(defulteProductObj);
    setTempColors([]);
    closeModal();
  }

  /*-------------RENDER-------------*/
  const renderProductList = productData.map((product) => (
    <ProductCard key={product.id} product={product} />
  ));

  const renderFormInputList = formInputList.map((input) => (
    <div className="flex flex-col" key={input.id}>
      <label
        htmlFor={input.id}
        className="mb-[2px] text-sm font-medium text-shadow-gray-700"
      >
        {input.label}
      </label>
      <Input
        type="text"
        id={input.id}
        name={input.name}
        value={product[input.name]}
        onChange={onChangeHandler}
      />
      <ErrorMessage message={errors[input.name]} />
    </div>
  ));

  const renderProductColor = colors.map((color) => (
    <CircleColor
      key={color}
      color={color}
      onClick={() => {
        if (tempColors.includes(color)) {
          setTempColors((prev) => prev.filter((item) => item !== color));
          return;
        }

        setTempColors((prev) => [...prev, color]);
      }}
    />
  ));

  return (
    <main className="container mx-auto">
      <Button className="bg-indigo-700 hover:bg-indigo-800" onClick={openModal}>
        Add
      </Button>

      <div className=" m-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-4 p-2 rounded-md">
        {renderProductList}
      </div>
      <Modal isOpen={isOpen} closeModal={closeModal} title="ADD A NEW PRODUCT">
        <form className="space-y-2" onSubmit={submitHandler}>
          {renderFormInputList}
          <div className="flex items-center my-4 flex-wrap space-x-1">
            {renderProductColor}
          </div>
          <div className="flex items-center my-4 flex-wrap space-x-1">
            {tempColors.map((color) => (
              <span
                key={color}
                className="p-1 mr-1 mb-1 text-xs rounded-md text-white"
                style={{ backgroundColor: color }}
              >
                {color}
              </span>
            ))}
          </div>

          <div className="flex items-center space-x-3">
            <Button className="bg-indigo-700 hover:bg-indigo-800">
              Submit
            </Button>
            <Button
              className="bg-gray-500 hover:bg-gray-600"
              onClick={onCancle}
            >
              Cancle
            </Button>
          </div>
        </form>
      </Modal>
    </main>
  );
}

export default App;
