"use client";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import CustomButton from "@/components/CustomBtn";
import Link from "next/link";
import CustomInput from "@/components/CustomInput";

import { MdEmail } from "react-icons/md";
import axios from "axios";

const ForgetPassword = () => {
  const router = useRouter();
  const [user, setUser] = useState({
    email: "",
  });
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [loading, setLoading] = useState(false);

  const sendEmail = async () => {
    try {
      setLoading(true);
      await axios.post("/api/users/sendemail", {
        emailType: "RESET",
        email: user.email,
      });
      alert("email sent");
      console.log("reset pass link sent");
    } catch (error: any) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user.email == "") {
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
          width={500}
          height={500}
          className="absolute left-0 xl:h-[300px] xl:w-[300px] w-64 h-64  bottom-0 z-0  lg:rounded-xl"
        />

        {/* ----sign up info---- */}
        <div className=" py-6 z-10 2xl:mr-32 xl:px-0 relative px-10">
          <h2 className="font-bold text-indigo-600 md:text-3xl text-xl">
            if you are new <br /> be sure to checkout rules
          </h2>
          <h3 className="text-cyan-600 md:text-xl mt-2">
            you dont have an Account?
          </h3>
          <Link href={"signup"}>
            <CustomButton
              title="Sign Up"
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
                "Verification"
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

            {/*---- submit button--- */}
            <CustomButton
              disabled={buttonDisabled ? true : false}
              title={"Send Email"}
              titleStyle="group-hover:-translate-x-[40%]  transition-all duration-500"
              addArrow={true}
              containerStyles="text-white  border bg-emerald-600 border-white/20 w-full py-2 px-8  hover:border-blue-800 hover:bg-indigo-800 font-bold  group"
              handleClick={sendEmail}
            />
          </>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
