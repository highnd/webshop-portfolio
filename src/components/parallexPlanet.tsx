"use client";
// AnimatedPlanet.tsx
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const AnimatedPlanet = () => {
  // Define the animation variants
  const initial = { opacity: 0, transform: "translate(-50%, -50%) scale(0.2)" };
  const animate = { opacity: 1, transform: "translate(0, 0) scale(1)" };

  return (
    <motion.div
      initial={initial}
      animate={animate}
      exit="initial" // optional, if you want an exit animation
      className="planet"
    >
      <Image src="/big-earth.png" alt="mountains" width={800} height={800} />
    </motion.div>
  );
};

export default AnimatedPlanet;

// import React from "react";

// const FormInput = ({ name, placeholder, label, checkError, ...rest }) => {
//   return (
//     <div className="flex flex-col-reverse dark:text-gray-400 text-black py-2">
//       <input
//         type={name}
//         name={name}
//         id={name}
//         className={`rounded-md bg-gray-200 mt-2 p-1 outline-none text-black focus:bg-gray-300 peer`}
//         placeholder={placeholder}
//         {...rest}
//       />
//       <label htmlFor={name} className="peer-focus:text-cyan-400  w-fit">
//         {label}
//       </label>
//     </div>
//   );
// };

// export default FormInput;
