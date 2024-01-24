"use client";
import Pagination from "@/app/ui/dashboard/pagination";
import Search from "@/app/ui/dashboard/search";
import DeleteModal from "@/components/DeleteModal";
import Modal from "@/components/Modal";
import { deleteProductAction } from "@/func/deleteProductAction";
import { getAllProducts } from "@/func/getAllProducts";
import { search } from "@/types";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const Products = () => {
  // for description
  // <p className={classes.details}>{item.description.substring(0, 250)}</p>

  const [products, setProducts] = useState<any>([]);
  const [total, setTotal] = useState("");
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const [id, setId] = useState(null);

  const searchParams = useSearchParams();
  const page = searchParams?.get("page") || 1;
  const searchQuery = searchParams?.get("search") || "";

  const getIdForDelete = (id: any) => {
    setDeleteModalOpen(true);
    console.log(id);
    setId(id);
  };

  const handleDelete = async (id: any) => {
    try {
      // Delete the product
      await deleteProductAction(id);

      // Update the state to remove the deleted product
      setProducts((prevProducts: any) =>
        prevProducts.filter((product: any) => product._id !== id)
      );

      console.log("Product deleted successfully!");
    } catch (error: any) {
      console.error("Failed to delete product:", error.message);
    } finally {
      // Close the modal
      setDeleteModalOpen(false);
    }
  };

  useEffect(() => {
    getAllProducts(page, searchQuery).then(({ products, total }) => {
      setProducts(products);
      setTotal(total);
    });
  }, [page, searchQuery]);
  return (
    <div className=" p-4 bg-secondary mt-5 rounded-lg">
      <div className="top flex justify-between items-center  rounded-lg mb-4">
        <Search placeholder={"Search for product"} />
        <Link
          href={"/dashboard/products/add"}
          className=" py-2 px-4 bg-gradient-to-r from-purple-500 to-cyan-500
            transition-all hover:opacity-75 rounded-full text-sm"
        >
          Add New
        </Link>
      </div>
      <div className="table w-full">
        <table className="w-full transactions">
          <thead className="text-soft">
            <tr>
              <td>Title</td>
              <td>Description</td>
              <td>Price</td>
              <td>Created at</td>
              <td>Stock</td>
              <td>Action</td>
            </tr>
          </thead>
          {/* list of users */}
          <tbody>
            {products?.map((product: any) => (
              <tr className=" " key={product._id}>
                <td>
                  <div className="flex gap-3 items-center">
                    <Image
                      src={"/banner.png"}
                      alt="avatar"
                      width={40}
                      height={40}
                      className="object-cover w-10 h-10 rounded-[50%]"
                    />
                    {product.title}
                  </div>
                </td>
                <td>{product.desc.substring(0, 10)}</td>
                <td>{product.price}</td>
                <td>{moment(product?.createdAt).format("MMM DD, YYYY")}</td>
                <td>{product.stock}</td>
                <td>
                  <div className="gap-5 flex">
                    <Link
                      href={`/dashboard/products/${product._id}`}
                      className=" hover:bg-cyan-500 rounded-xl px-2 py-1 text-sm bg-purple-500"
                    >
                      View
                    </Link>
                    <button
                      onClick={() => getIdForDelete(product._id)}
                      className="bg-red-500 rounded-xl px-2 py-1 text-sm hover:bg-orange-400"
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Pagination />

      <Modal
        isOpen={isDeleteModalOpen}
        onClose={() => setDeleteModalOpen(false)}
        component={
          <DeleteModal
            onClose={() => setDeleteModalOpen(false)}
            onDelete={() => handleDelete(id)}
          />
        }
        title="Delete Product"
      />
    </div>
  );
};

export default Products;
