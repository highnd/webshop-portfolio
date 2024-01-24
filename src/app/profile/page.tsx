"use client";
import React from "react";
import axios from "axios";
import Link from "next/link";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { CustomButton } from "@/components/CustomBtn";
import { identifyUser } from "@/func/identifyUser";

const Profile = ({ params }: any) => {
  const router = useRouter();
  const [userData, setUserData] = useState<any>([]);

  const logOut = async () => {
    try {
      await axios.get("/api/users/logout");
      toast.success("LogOut successful");
      router.push("/login");
    } catch (error: any) {
      console.log(error.message);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    identifyUser().then(({ userData }) => {
      setUserData(userData);
    });
  }, []);

  return (
    <div className="h-screen bg-slate-800 flex items-center justify-center text-orange-500 relative z-50">
      Profile
      <CustomButton
        title="log Out"
        titleStyle=""
        addArrow={false}
        containerStyles="text-white  border bg-indigo-600 border-white/20  py-2 px-8 hover:text-indigo-600 hover:border-blue-800 hover:bg-white font-bold group m-8"
        handleClick={logOut}
      />
      {userData?.username} <br />
      {userData?.email} <br />
      {userData?._id} <br />
      {params.id}
    </div>
  );
};

export default Profile;
