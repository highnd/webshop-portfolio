import React from "react";
import { CiSquareRemove } from "react-icons/ci";

interface Modal {
  isOpen: boolean;
  onClose: () => void;
  component: any;
  title: string;
}

const Modal: React.FC<Modal> = ({ isOpen, onClose, title, component }) => {
  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center
       backdrop-filter backdrop-blur-md ${isOpen ? "" : "hidden"}`}
    >
      <div>
        <div className=" w-full bg-primary  flex p-2 items-center  border-b-2 border-soft ">
          <p className="text-center w-full font-bold text-lg text-white ">
            ! {title} !
          </p>
          <CiSquareRemove
            onClick={onClose}
            className=" text-red-500  text-xl rounded-full cursor-pointer"
          />
        </div>

        {component}
      </div>
    </div>
  );
};

export default Modal;
