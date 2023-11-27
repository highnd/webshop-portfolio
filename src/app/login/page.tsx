"use client";
import CustomButton from "@/components/CustomBtn";
import CustomInput from "@/components/CustomInput";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";
import Image from "next/image";
import { SignUpForm } from "@/types";
import toast from "react-hot-toast";

import { BiSolidUser } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";

const Login = () => {
  const router = useRouter();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [loading, setLoading] = useState(false);

  const onLogIn = async () => {
    try {
      setLoading(true);
      const response = await axios.post("/api/users/login", user);
      console.log("login success", response.data);
      router.push(`/profile`);
    } catch (error: any) {
      toast.error("error.message");
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user.email == "" || user.password == "") {
      setButtonDisabled(true);
    } else {
      setButtonDisabled(false);
    }
  }, [user]);

  return (
    <div className=" flex justify-center md:py-44 h-screen  bg-slate-900 md:px-36">
      <Image
        src={"/side-wave.png"}
        alt="effect"
        width={500}
        height={500}
        className="absolute left-0 xl:h-[800px] xl:w-[800px] w-64 h-64  bottom-0   lg:rounded-xl"
      />
      <div className="w-full h-full md:flex justify-end relative z-20">
        {/* -----wave effect----*/}

        {/* ----sign up info---- */}
        <div className=" py-6  relative px-10 xl:px-20 ">
          <h2 className="font-bold text-indigo-600 md:text-5xl text-xl">
            if you are new <br /> be sure to checkout rules
          </h2>
          <h3 className="text-cyan-600 md:text-2xl mt-2">
            you dont have an Account?
          </h3>
          <Link
            href={"signup"}
            className="text-white  border bg-indigo-600 border-white/20  py-2 px-8 hover:text-indigo-600
             hover:border-blue-800 hover:bg-white font-bold group custom-button w-44"
          >
            Sign Up
          </Link>
        </div>

        {/* -----sign up form ---- */}
        <div className=" md:w-[450px] w-full h-max md:px-12 px-2 md:py-8 py-6 md:rounded-xl relative backdrop-blur-3xl bg-indigo-500/50">
          <>
            <h1 className="text-[36px] text-center font-bold leading-6 mb-10 text-white">
              {loading ? (
                <span className="text-green-500">Processing</span>
              ) : (
                "Log in"
              )}
            </h1>

            {/* ---- email--- */}
            <CustomInput
              placeholder="email"
              inputType="email"
              containerStyles=" w-full h-[50px]  mb-6 relative "
              inputStyle="input"
              addIcon={true}
              icon={<MdEmail />}
              iconStyle="icon"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
            />
            {/*  -----password---- */}
            <CustomInput
              placeholder="password"
              inputType="password"
              containerStyles=" w-full h-[50px]  mb-4 relative "
              inputStyle="input"
              addIcon={true}
              icon={<RiLockPasswordFill />}
              iconStyle="icon"
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
            />

            {/* --- remember pass / forgot pass ----*/}
            <div className=" flex justify-between text-slate-800 text-md m-2 ">
              <label className="flex gap-2 font-bold ">
                <input type="checkbox" />
                <p>remember me</p>
              </label>
              <Link href={"/forgetpassword"}>Forgot password</Link>
            </div>

            {/*---- submit button--- */}
            <CustomButton
              disabled={buttonDisabled ? true : false}
              title={"Log In"}
              titleStyle="group-hover:-translate-x-[40%]  transition-all duration-500"
              addArrow={true}
              containerStyles="text-white  border bg-cyan-600 border-white/20 w-full py-2 px-8 
               hover:border-blue-800 hover:bg-indigo-800 font-bold  group"
              handleClick={onLogIn}
            />
          </>
        </div>
      </div>
    </div>
  );
};

export default Login;
