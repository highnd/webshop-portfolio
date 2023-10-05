"use client";
import axios from "axios";
import Link from "next/link";
import React, { useState, useEffect } from "react";

export default function VerifyEmail() {
  const [token, setToken] = useState("");
  const [verified, setVerified] = useState(false);
  const [error, setError] = useState(false);

  const verifyUserEmail = async () => {
    try {
      await axios.post("/api/users/verifyemail", { token });
      setVerified(true);
    } catch (error: any) {
      setError(true);
      console.log(error);
    }
  };

  useEffect(() => {
    const urlToken = window.location.search.split("=")[1];
    setToken(urlToken || "");
  }, []);

  useEffect(() => {
    if (token.length > 0) {
      verifyUserEmail();
    }
  }, [token]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-800 gap-4 py-4">
      <h1 className="text-5xl text-white">Verify Email</h1>
      <h2 className="text-xl text-white">{token ? `${token}` : "wait..."}</h2>

      {verified ? (
        <>
          <h2 className="text-xl text-white"> Congrats!! Email Verified </h2>
          <Link className="p-3 bg-orange-500 text-black" href={"/login"}>
            Login
          </Link>
        </>
      ) : null}

      {error ? (
        <>
          <h1 className="text-3xl bg-red-500 p-4 text-white rounded-lg">
            Error
          </h1>
          <h2 className="text-xl text-white">no token or token invalid</h2>
        </>
      ) : null}
    </div>
  );
}
