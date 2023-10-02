"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";
import Image from "next/image";
import { SignUpForm } from "@/types";
import { toast } from "react-hot-toast";

//  import icons
import { BiSolidUser } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import CustomButton from "@/components/CustomBtn";
import CustomInput from "@/components/CustomInput";

const SignUp = () => {
  const router = useRouter();
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [loading, setLoading] = useState(false);

  const onSignUp = async () => {
    try {
      setLoading(true);
      const response = await axios.post("/api/users/signup", user);
      console.log("sign up success", response.data);
      router.push("/login");
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user.username == "" || user.email == "" || user.password == "") {
      setButtonDisabled(true);
    } else {
      setButtonDisabled(false);
    }
  }, [user]);

  return (
    <div className=" flex justify-center items-center min-h-screen bg-slate-900 md:px-36">
      <div className="w-full h-full  bg-white  lg:flex justify-end relative lg:rounded-xl ">
        {/* -----wave effect----*/}
        <Image
          src={"/side-wave.png"}
          alt="effect"
          width={700}
          height={700}
          className="absolute left-0 xl:h-[500px] xl:w-[500px] w-64 h-64  bottom-0 z-0  lg:rounded-xl"
        />

        {/* ----sign up info---- */}
        <div className=" py-6 z-10 2xl:mr-32 xl:px-0 relative px-10">
          <h2 className="font-bold text-indigo-600 md:text-3xl text-xl">
            please read our terms & <br /> accept it before sign up
          </h2>
          <h3 className="text-cyan-600 md:text-xl mt-2">
            do you already have an Account?
          </h3>
          <Link href={"login"}>
            <CustomButton
              title="Login"
              titleStyle=""
              addArrow={false}
              containerStyles="text-white  border bg-indigo-600 border-white/20  py-2 px-8 hover:text-indigo-600 hover:border-blue-800 hover:bg-white font-bold group z-10"
            />
          </Link>
        </div>

        {/* -----sign up form ---- */}
        <div className=" md:w-[450px] w-full  md:px-12 px-2 md:py-8 py-6 rounded-xl relative">
          <>
            <h1 className="text-[36px] text-center font-bold leading-6 mb-10 text-black">
              {loading ? (
                <span className="text-green-500">Processing</span>
              ) : (
                "Sign Up"
              )}
            </h1>
            {/* --- username--- */}
            <CustomInput
              placeholder="username"
              inputType="text"
              containerStyles=" w-full h-[50px]  mb-6 relative "
              inputStyle="input"
              addIcon={true}
              icon={<BiSolidUser />}
              iconStyle="icon"
              value={user.username}
              onChange={(e) => setUser({ ...user, username: e.target.value })}
            />

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
              <div>Forgot password</div>
            </div>

            {/*---- submit button--- */}
            <CustomButton
              disabled={buttonDisabled ? true : false}
              title={"Sign Up"}
              titleStyle="group-hover:-translate-x-[40%]  transition-all duration-500"
              addArrow={true}
              containerStyles="text-white  border bg-emerald-600 border-white/20 w-full py-2 px-8  hover:border-blue-800 hover:bg-indigo-800 font-bold  group"
              handleClick={onSignUp}
            />
          </>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
