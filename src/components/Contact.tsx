"use client";
// icons
import { BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion";

// variants
import { fadeIn } from "@/utils/motion";
import DrawOutlineButton from "./CustomBtn";

import { useState } from "react";
import axios from "axios";
import { sendMessage } from "@/func/sendMessage";
// import ComboBox from "./comboBox";

const Contact = () => {
  const [message, setMessage] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setLoading(true);
      sendMessage(message).then(({ message, user }) => {
        alert({ message, user });
        setMessage({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      });
    } catch (error: any) {
      // toast.error("error.message");
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <section className="w-full relative z-50 ">
      <div className="  text-center xl:text-left flex items-center justify-center h-full">
        {/* text and form */}
        <div className="flex flex-col w-full max-w-[700px] ">
          {/* text */}
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit={"hidden"}
            className="lg:text-5xl text-2xl text-center lg:mb-12 my-4  "
          >
            Lets <span className="text-animated-glow">connect . .</span>
          </motion.h2>
          <motion.form
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            animate="show"
            exit={"hidden"}
            onSubmit={handleSubmit}
            className="flex-1 flex flex-col lg:gap-6 gap-3 w-full mx-auto"
          >
            {/* group */}
            <div className="flex gap-x-6 w-full">
              <input
                type="text"
                placeholder="name"
                className="w-full h-[52px] rounded-lg pl-6 capitalize bg-transparent focus:bg-white/5 outline-none focus:ring-1 
              focus:ring-purple-500 border border-purple-500 placeholder:text-white/30 placeholder:font-light"
                value={message.name}
                onChange={(e) =>
                  setMessage({ ...message, name: e.target.value })
                }
              />
              <input
                type="email"
                placeholder="email"
                className="w-full h-[52px] rounded-lg pl-6 capitalize bg-transparent focus:bg-white/5 outline-none focus:ring-1
                focus:ring-purple-500 border border-purple-500 placeholder:text-white/30 placeholder:font-light"
                value={message.email}
                onChange={(e) =>
                  setMessage({ ...message, email: e.target.value })
                }
              />
            </div>
            <input
              type="text"
              placeholder="subject"
              className="w-full h-[52px] rounded-lg pl-6 capitalize bg-transparent focus:bg-white/5 outline-none focus:ring-1
              focus:ring-purple-500 border border-purple-500 placeholder:text-white/30 placeholder:font-light"
              value={message.subject}
              onChange={(e) =>
                setMessage({ ...message, subject: e.target.value })
              }
            />
            <textarea
              placeholder="message"
              className=" w-full h-[180px] p-4  rounded-lg resize-none  capitalize bg-transparent focus:bg-white/5 outline-none focus:ring-1
             focus:ring-purple-500 border border-purple-500 placeholder:text-white/30 placeholder:font-light"
              value={message.message}
              onChange={(e) =>
                setMessage({ ...message, message: e.target.value })
              }
            ></textarea>

            <DrawOutlineButton type="submit">Send message</DrawOutlineButton>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
