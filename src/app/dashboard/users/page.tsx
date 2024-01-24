"use client";
import React, { useEffect, useState } from "react";
import Pagination from "@/app/ui/dashboard/pagination";
import Search from "@/app/ui/dashboard/search";
import { getAllUsers } from "@/func/getAllUsers";
import Image from "next/image";
import Link from "next/link";
import moment from "moment";
import { useSearchParams } from "next/navigation";
import Modal from "@/components/Modal";
import DeleteModal from "@/components/DeleteModal";
import { deleteUserAction } from "@/func/deleteUserAction";

const Users = () => {
  const [users, setUsers] = useState<any>([]);
  const [total, setTotal] = useState("");
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const [id, setId] = useState(null);

  const searchParams = useSearchParams();
  const page = searchParams?.get("page") || 1;
  const searchQuery = searchParams?.get("search") || "";

  const getIdForDelete = (id: any) => {
    setDeleteModalOpen(true);
    setId(id);
  };

  const handleDelete = async () => {
    try {
      // Delete the product
      await deleteUserAction(id);
      // Update the state to remove the deleted product
      setUsers((prevUsers: any) =>
        prevUsers.filter((user: any) => user._id !== id)
      );
      console.log("user deleted successfully!");
    } catch (error: any) {
      console.error("Failed to delete user:", error.message);
    } finally {
      // Close the modal
      setDeleteModalOpen(false);
    }
  };

  useEffect(() => {
    getAllUsers(page, searchQuery).then(({ users, total }) => {
      setUsers(users);
      setTotal(total);
    });
  }, [page, searchQuery]);

  return (
    <div className=" p-4 bg-secondary mt-5 rounded-lg">
      <div className="top flex justify-between items-center  rounded-lg mb-4">
        <Search placeholder={"Search for user"} />
        <Link
          href={"/dashboard/users/add"}
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
              <td>Name</td>
              <td>Email</td>
              <td>Created at</td>
              <td>Role</td>
              <td>Status</td>
              <td>Action</td>
            </tr>
          </thead>
          {/* list of users */}
          <tbody>
            {users?.map((user: any) => (
              <tr className=" " key={user._id}>
                <td>
                  <div className="flex gap-3 items-center">
                    <Image
                      src={user.img || "/banner.png"}
                      alt="avatar"
                      width={40}
                      height={40}
                      className="object-cover w-10 h-10 rounded-[50%]"
                    />
                    {user.username}
                  </div>
                </td>
                <td>{user.email}</td>
                <td>{moment(user?.createdAt).format("MMM DD, YYYY")}</td>
                <td>{user.role === "admin" ? "admin" : "client"}</td>

                <td>{user.isActive ? "active" : "passive"}</td>
                <td>
                  <div className="gap-5 flex">
                    <Link
                      href={`/dashboard/users/${user._id}`}
                      className=" hover:bg-cyan-500 rounded-xl px-2 py-1 text-sm bg-purple-500"
                    >
                      View
                    </Link>
                    <button
                      onClick={() => getIdForDelete(user._id)}
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
      <Pagination total={total} />

      {/* Reusable Delete Modal */}
      <Modal
        isOpen={isDeleteModalOpen}
        onClose={() => setDeleteModalOpen(false)}
        component={
          <DeleteModal
            onClose={() => setDeleteModalOpen(false)}
            onDelete={handleDelete}
          />
        }
        title="Delete User"
      />
    </div>
  );
};

export default Users;
