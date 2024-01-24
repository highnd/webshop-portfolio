import React from "react";

interface ModalComponent {
  onClose: () => void;
  onDelete?: () => void;
}

const DeleteModal: React.FC<ModalComponent> = ({ onClose, onDelete }) => {
  return (
    <div className="bg-primary py-6 px-20 rounded-md shadow-md flex flex-col justify-center items-center">
      <p className="mb-4 text-lg">Are you sure you want to delete?</p>

      <div className="w-full gap-6 flex items-center justify-center py-2">
        <button
          className="bg-red-500 text-white px-16 py-2 mr-2 rounded-lg hover:bg-red-600"
          onClick={onDelete}
        >
          Yes
        </button>
        <button
          className="bg-cyan-500  text-white px-16 py-2 rounded-lg hover:bg-gray-400"
          onClick={onClose}
        >
          No
        </button>
      </div>
    </div>
  );
};

export default DeleteModal;
