"use client";

import { addUserAction } from "@/func/addUserAction";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const AddUser = () => {
  const [formData, setFormData] = useState({
    username: "",
    isAdmin: "false",
    isActive: "true",
    email: "",
    password: "",
    phone: "",
    address: "",
  });
  const router = useRouter();

  const handleChange = ({ target }: any) => {
    const { name, value } = target;
    setFormData((prevData: any) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form Data:", formData);

    addUserAction(formData).then(({ user, message }) => {
      alert(message);
      console.log(message, user);
      setFormData({
        username: "",
        isAdmin: "",
        isActive: "",
        email: "",
        password: "",
        phone: "",
        address: "",
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
          placeholder="Username"
          name="username"
          onChange={handleChange}
          value={formData.username}
          className="p-4 w-[45%] rounded-md bg-primary text-soft border-[1px] border-soft/50 mb-4"
          required
        />
        <select
          name="isAdmin"
          id="isAdmin"
          onChange={handleChange}
          value={formData.isAdmin}
          className="p-4 w-[45%]   rounded-md bg-primary text-soft border-[1px] border-soft/50 mb-4"
        >
          <option value={`false`} selected>
            is Admin?
          </option>
          <option value={`true`}>yes</option>
          <option value={`false`}>No</option>
        </select>
        <select
          name="isActive"
          id="isActive"
          onChange={handleChange}
          value={formData.isActive}
          className="p-4 w-[45%]   rounded-md bg-primary text-soft border-[1px] border-soft/50 mb-4"
        >
          <option value={`true`} selected>
            is Active?
          </option>
          <option value={`true`}>yes</option>
          <option value={`false`}>No</option>
        </select>
        <input
          type="email"
          placeholder="Email"
          name="email"
          onChange={handleChange}
          value={formData.email}
          className="p-4 w-[45%] rounded-md bg-primary border-[1px] border-soft/50 mb-4"
          required
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          onChange={handleChange}
          value={formData.password}
          className="p-4 w-[45%] rounded-md bg-primary text-soft border-[1px] border-soft/50 mb-4 "
          required
        />
        <input
          type="phone"
          placeholder="phone number"
          name="phone"
          onChange={handleChange}
          value={formData.phone}
          className="p-4 w-[45%] rounded-md bg-primary text-soft border-[1px] border-soft/50 mb-4"
        />

        <textarea
          name="address"
          id="address"
          placeholder="address"
          rows={8}
          onChange={handleChange}
          value={formData.address}
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

export default AddUser;
