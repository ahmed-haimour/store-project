import { useState, type ChangeEvent, type FormEvent } from "react";
import ProductCard from "./components/ProductCard";
import Modal from "./components/ui/Modal";
import { categories, colors, formInputList, productList } from "./data";
import Button from "./components/ui/Button";
import Input from "./components/ui/Input";
import { v4 as uuid } from "uuid";
import type { IProduct } from "./interfaces";
import { colorValidation, productValidation } from "./validation";
import ErrorMessage from "./components/ErrorMessage";
import CircleColor from "./components/CircleColor";
import toast, { Toaster } from "react-hot-toast";
import Select from "./components/ui/Select";
import type { TProductNames } from "./types";
function App() {
  const defulteProductObj = {
    title: "",
    description: "",
    imageURL: "",
    price: "",
    colors: [],
    category: {
      name: "",
      imageURL: ""
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
  const [productToEdit, setProductToEdit] =
    useState<IProduct>(defulteProductObj);
  const [productToEditIdx, setProductToEditIdx] = useState<number>(0);

  const [errorMsg, setErrorMsg] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenEditModal, setIsOpenEditModal] = useState(false);
  const [isOpenConfirmModal, setIsOpenConfirmModal] = useState(false);

  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  console.log(errorMsg);
  /*-------------HANDLER-------------*/
  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);
  const closeEditModal = () => setIsOpenEditModal(false);
  const openEditModal = () => setIsOpenEditModal(true);

  const closeConfirmModal = () => setIsOpenConfirmModal(false);
  const openConfirmModal = () => setIsOpenConfirmModal(true);

  console.log(productToEditIdx);
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

  function onChangeEditHandler(event: ChangeEvent<HTMLInputElement>) {
    const { value, name } = event.target;
    setProductToEdit({
      ...productToEdit,
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

    const ColorValidation = colorValidation(product.colors);
    if (ColorValidation !== "") {
      setErrorMsg(ColorValidation);
    }

    const hasErrorMsg =
      Object.values(errors).some((value) => value === "") &&
      Object.values(errors).every((value) => value === "");
    console.log(hasErrorMsg);
    if (!hasErrorMsg) {
      setErrors(errors);
      return;
    }

    setProductData((prev) => [
      {
        ...product,
        id: uuid(),
        colors: tempColors,
        category: selectedCategory,
      },
      ...prev,
    ]);
    setProduct(defulteProductObj);
    setTempColors([]);
    closeModal();
    toast("Product has been created", {
      icon: "✅",
      style: {
        background: "black",
        color: "white",
      },
    });
  }

  function submitEditHandler(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    const { title, description, imageURL, price } = productToEdit;

    const errors = productValidation({
      title,
      description,
      imageURL,
      price,
    });

    const ColorValidation = colorValidation(product.colors);
    if (ColorValidation !== "") {
      setErrorMsg(ColorValidation);
    }

    const hasErrorMsg =
      Object.values(errors).some((value) => value === "") &&
      Object.values(errors).every((value) => value === "");
    console.log(hasErrorMsg);
    if (!hasErrorMsg) {
      setErrors(errors);
      return;
    }

    setProductData((prev) => [
      {
        ...product,
        id: uuid(),
        colors: tempColors,
        category: selectedCategory,
      },
      ...prev,
    ]);

    const updateProducts = [...productData];
    updateProducts[productToEditIdx] = {
      ...productToEdit,
      colors: tempColors.concat(productToEdit.colors),
    };
    setProductData(updateProducts);

    setProductToEdit(defulteProductObj);
    setTempColors([]);
    closeEditModal();

    toast("Product has been updated", {
      icon: "✅",
      style: {
        background: "black",
        color: "white",
      },
    });
  }

  function removeProductHandler() {
    console.log("PROduct id", productToEdit.id);
    const filtered = productData.filter(
      (product) => product.id !== productToEdit.id
    );
    setProductData(filtered);
    closeConfirmModal();
    toast("Product has been deleted", {
      icon: "❌",
      style: {
        background: "black",
        color: "white",
      },
    });
  }

  /*-------------RENDER-------------*/
  const renderProductList = productData.map((product, idx) => (
    <ProductCard
      key={product.id}
      product={product}
      setProductToEdit={setProductToEdit}
      openEditModal={openEditModal}
      idx={idx}
      setProductToEditIdx={setProductToEditIdx}
      openConfirmModal={openConfirmModal}
    />
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
        if (productToEdit.colors.includes(color)) {
          setTempColors((prev) => prev.filter((item) => item !== color));
          return;
        }
        setTempColors((prev) => [...prev, color]);
      }}
    />
  ));

  function renderProductEditWithErrorMsg(
    id: string,
    label: string,
    name: TProductNames
  ) {
    return (
      <div className="flex flex-col">
        <label
          htmlFor={id}
          className="mb-[2px] text-sm font-medium text-shadow-gray-700"
        >
          {label}
        </label>

        <Input
          type="text"
          id={id}
          name={name}
          value={productToEdit[name]}
          onChange={onChangeEditHandler}
        />
        <ErrorMessage message={errors[name]} />
      </div>
    );
  }

  return (
    <main className="container mx-auto">
      <Button
        className="w-fit m-1 bg-indigo-700 hover:bg-indigo-800 text-white"
        onClick={openModal}
      >
        Build Product
      </Button>
      <div className=" m-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-4 p-2 rounded-md">
        {renderProductList}
      </div>

      {/* ADD PRODUCT MODAL */}
      <Modal isOpen={isOpen} closeModal={closeModal} title="ADD A NEW PRODUCT">
        <form className="space-y-2" onSubmit={submitHandler}>
          {renderFormInputList}

          <Select
            selected={selectedCategory}
            setSelected={setSelectedCategory}
          />

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
            <Button className="bg-indigo-700 hover:bg-indigo-800 text-white">
              Submit
            </Button>
            <Button
              className="bg-gray-500 hover:bg-gray-600 text-white"
              onClick={onCancle}
            >
              Cancle
            </Button>
          </div>
        </form>
      </Modal>

      {/* EDIT PRODUCT MODAL */}
      <Modal
        isOpen={isOpenEditModal}
        closeModal={closeEditModal}
        title="EDIT THIS NEW PRODUCT"
      >
        <form className="space-y-2" onSubmit={submitEditHandler}>
          {renderProductEditWithErrorMsg("title", "Product Title", "title")}
          {renderProductEditWithErrorMsg(
            "description",
            "Product Description",
            "description"
          )}
          {renderProductEditWithErrorMsg(
            "imageURL",
            "Product Image URL",
            "imageURL"
          )}
          {renderProductEditWithErrorMsg("price", "Product Price", "price")}

          <Select
            selected={productToEdit.category}
            setSelected={(value) =>
              setProductToEdit({ ...productToEdit, category: value })
            }
          />

          <div className="flex items-center my-4 flex-wrap space-x-1">
            {renderProductColor}
          </div>

          <div className="flex items-center my-4 flex-wrap space-x-1">
            {tempColors.concat(productToEdit.colors).map((color) => (
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
            <Button className="bg-indigo-700 hover:bg-indigo-800 text-white">
              Submit
            </Button>
            <Button
              className="bg-gray-500 hover:bg-gray-600 text-white"
              onClick={onCancle}
            >
              Cancle
            </Button>
          </div>
        </form>
      </Modal>

      {/* Delete Product Modal */}
      <Modal
        isOpen={isOpenConfirmModal}
        closeModal={closeConfirmModal}
        title="Are you sure you want to remove this product from you store?"
        description="This action cannot be undone. Once deleted, the product will be permanently removed."
      >
        <div className="flex items-center space-x-3">
          <Button
            className="bg-[#c2344d] hover:bg-red-800 text-white"
            onClick={removeProductHandler}
          >
            Yes, remove
          </Button>
          <Button
            className="bg-[#f5f5fa] hover:bg-gray-300 text-black"
            onClick={closeConfirmModal}
          >
            Cancel
          </Button>
        </div>
      </Modal>
      <Toaster />
    </main>
  );
}

export default App;
