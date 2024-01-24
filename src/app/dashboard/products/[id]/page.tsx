"use client";
import { getSingleProduct } from "@/func/getSingleProduct";
import { updateProductAction } from "@/func/updateProductAction";
import Image from "next/image";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const ProductProfile = () => {
  const [product, setProduct] = useState<any>([]);

  const { id } = useParams();

  const handleChange = ({ target }: any) => {
    const { name, value } = target;
    setProduct((prevData: any) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    updateProductAction(product).then(({ message, product }) => {
      alert(message);
      setProduct(product);
    });
  };

  useEffect(() => {
    getSingleProduct(id).then(({ productData }) => {
      setProduct(productData);
      // alert(id);
      console.log(productData);
    });
  }, [id]);
  return (
    <div className=" flex gap-6 pt-6">
      <div className="info flex-[1] h-max bg-secondary p-2 font-[500] rounded-lg">
        <div className="image w-full h-[250px] relative rounded-lg overflow-hidden mb-2">
          <Image src={"/banner.png"} alt="profile" fill />
        </div>
        {product?.title}
      </div>
      <div className="form flex-[3] bg-secondary p-4 rounded-lg">
        <form action="" className="flex flex-col" onSubmit={handleSubmit}>
          <label htmlFor="title"> Title</label>
          <input
            type="text"
            name="title"
            placeholder="title"
            value={product?.title}
            onChange={handleChange}
            className="p-4  rounded-md bg-primary text-soft border-[1px] border-soft/50 mb-4 mt-1"
          />
          <label htmlFor="price">Price</label>
          <input
            type="number"
            name="price"
            placeholder="price "
            value={product?.price}
            onChange={handleChange}
            className="p-4  rounded-md bg-primary text-soft border-[1px] border-soft/50 mb-4 mt-1"
          />
          <label htmlFor="stock">Stock</label>
          <input
            type="number"
            name="stock"
            placeholder="stock"
            value={product?.stock}
            onChange={handleChange}
            className="p-4  rounded-md bg-primary text-soft border-[1px] border-soft/50 mb-4 mt-1"
          />
          <label htmlFor="color">Color</label>
          <input
            type="text"
            name="color"
            placeholder="color "
            value={product?.color}
            onChange={handleChange}
            className="p-4 rounded-md bg-primary text-soft border-[1px] border-soft/50 mb-4 mt-1"
          />
          <label htmlFor="color">SIze</label>
          <input
            type="number"
            name="Size"
            placeholder="size "
            value={product?.size}
            onChange={handleChange}
            className="p-4 rounded-md bg-primary text-soft border-[1px] border-soft/50 mb-4 mt-1"
          />

          <label htmlFor="category">Choose category</label>
          <select
            name="isAdmin"
            id="isAdmin"
            className="p-4  rounded-md bg-primary text-soft border-[1px] border-soft/50 mb-4 mt-1"
          >
            <option value="general">Choose a category</option>
            <option value="e-commerce website">E-commerce website</option>
            <option value="portfolio website">Portfolio website</option>
            <option value="blog website">Blog website</option>
            <option value="online shop website">Online shop website</option>
            <option value="other website">Other website</option>
          </select>

          <label htmlFor="Description">Description</label>
          <textarea
            rows={8}
            name="desc"
            placeholder="Description"
            value={product?.desc}
            onChange={handleChange}
            className="p-4  rounded-md bg-primary text-soft border-[1px] border-soft/50 mb-4 mt-1"
          />
          <button
            type="submit"
            className="p-3 mt-3 w-full rounded-md  bg-purple-800 hover:bg-purple-500 transition-all  "
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProductProfile;
