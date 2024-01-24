"use client";
import { getSingleUser } from "@/func/getSingleUser";
import { identifyUser } from "@/func/identifyUser";
import { updateUserAction } from "@/func/updateUserAction";
import Image from "next/image";
import { useParams } from "next/navigation";

import React, { useEffect, useState } from "react";

const UserProfile = () => {
  const [user, setUser] = useState<any>([]);
  const { id } = useParams();

  const handleChange = ({ target }: any) => {
    const { name, value } = target;
    setUser((prevData: any) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    updateUserAction(user).then(({ message, user }) => {
      alert(message);
      setUser(user);
    });
  };

  useEffect(() => {
    getSingleUser(id).then(({ userData }) => {
      setUser(userData);
      // alert(id);
      console.log(userData);
    });
  }, [id]);
  return (
    <div className=" flex gap-6 pt-6">
      <div className="info flex-[1] h-max bg-secondary p-2 font-[500] rounded-lg">
        <div className="image w-full h-[250px] relative rounded-lg overflow-hidden mb-2">
          <Image src={"/banner.png"} alt="profile" fill />
        </div>
        {user.username}
      </div>
      <div className="form flex-[3] bg-secondary p-4 rounded-lg">
        <form action="" className="flex flex-col">
          <label htmlFor="username"> Username</label>
          <input
            type="text"
            name="username"
            value={user.username}
            onChange={handleChange}
            placeholder="username"
            className="p-4  rounded-md bg-primary text-soft border-[1px] border-soft/50 mb-4 mt-1"
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            value={user.email}
            placeholder="email "
            className="p-4  rounded-md bg-primary text-soft border-[1px] border-soft/50 mb-4 mt-1"
          />

          <label htmlFor="phone">Phone number</label>
          <input
            type="phone"
            name="phone"
            value={user.phone}
            onChange={handleChange}
            placeholder="phone"
            className="p-4 rounded-md bg-primary text-soft border-[1px] border-soft/50 mb-4 mt-1"
          />

          <label htmlFor="isAdmin">Role</label>
          <select
            name="isAdmin"
            id="isAdmin"
            onChange={handleChange}
            className="p-4  rounded-md bg-primary text-soft border-[1px] border-soft/50 mb-4 mt-1"
          >
            <option value={`false`} selected>
              is Admin?
            </option>
            <option value={`true`} selected={user.isAdmin}>
              yes
            </option>
            <option value={`false`} selected={!user.isAdmin}>
              No
            </option>
          </select>

          <label htmlFor="isActive">Status</label>
          <select
            name="isActive"
            id="isActive"
            onChange={handleChange}
            className="p-4  rounded-md bg-primary text-soft border-[1px] border-soft/50 mb-4 mt-1"
          >
            <option value={`true`}>is Active?</option>
            <option value={`true`} selected={user.isActive}>
              yes
            </option>
            <option value={`false`} selected={!user.isActive}>
              No
            </option>
          </select>

          <label htmlFor="address">Address</label>
          <textarea
            rows={8}
            name="address"
            placeholder=" address"
            onChange={handleChange}
            value={user.address}
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

export default UserProfile;
