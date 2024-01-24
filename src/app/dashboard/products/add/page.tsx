"use client";
import { addProductAction } from "@/func/addProductAction";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const AddProduct = () => {
  const [formData, setFormData] = useState({
    title: "",
    size: "",
    desc: "",
    price: "",
    stock: "",
    color: "",
  });
  const router = useRouter();

  const handleChange = ({ target }: any) => {
    const { name, value } = target;
    setFormData((prevData: any) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // console.log("Form Data:", formData);

    addProductAction(formData).then(({ product, message }) => {
      alert(message);
      console.log(message, product);
      setFormData({
        title: "",
        size: "",
        desc: "",
        price: "",
        stock: "",
        color: "",
      });
      router.push("/dashboard/products");
    });
  };
  return (
    <div className=" p-4 bg-secondary mt-5 rounded-lg">
      <form
        className="flex flex-wrap p-3 justify-between "
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="title"
          name="title"
          onChange={handleChange}
          value={formData.title}
          className="p-4 w-[45%] rounded-md bg-primary text-soft border-[1px] border-soft/50 mb-4"
          required
        />
        <select
          name="category"
          id="category"
          className="p-4 w-[45%]   rounded-md bg-primary text-soft border-[1px] border-soft/50 mb-4"
        >
          <option value="general">Choose a category</option>
          <option value="e-commerce website">E-commerce website</option>
          <option value="portfolio website">Portfolio website</option>
          <option value="blog website">Blog website</option>
          <option value="online shop website">Online shop website</option>
          <option value="other website">Other website</option>
        </select>
        <input
          type="number"
          placeholder="price"
          name="price"
          onChange={handleChange}
          value={formData.price}
          className="p-4 w-[45%] rounded-md bg-primary border-[1px] border-soft/50 mb-4"
          required
        />
        <input
          type="number"
          placeholder="stock"
          name="stock"
          onChange={handleChange}
          value={formData.stock}
          className="p-4 w-[45%] rounded-md bg-primary text-soft border-[1px] border-soft/50 mb-4"
          required
        />
        <input
          type="text"
          placeholder="color"
          name="color"
          onChange={handleChange}
          value={formData.color}
          className="p-4 w-[45%] rounded-md bg-primary text-soft border-[1px] border-soft/50 mb-4"
          required
        />
        <input
          type="text"
          placeholder="size"
          name="size"
          onChange={handleChange}
          value={formData.size}
          className="p-4 w-[45%] rounded-md bg-primary text-soft border-[1px] border-soft/50 mb-4"
          required
        />
        <textarea
          name="desc"
          id="description"
          placeholder="description"
          rows={8}
          onChange={handleChange}
          value={formData.desc}
          className="p-4 w-full rounded-md bg-primary text-soft border-[1px] border-soft/50 mb-4"
        ></textarea>
        <button
          type="submit"
          className="p-3 w-full rounded-md  bg-purple-800 hover:bg-purple-500 transition-all  "
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
