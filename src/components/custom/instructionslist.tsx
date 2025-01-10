
'use client'
import React, { useState } from 'react';

interface InstructionsListProps {
  onClose: () => void;
}

const InstructionsList: React.FC<InstructionsListProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30">
      <div className="p-6 bg-white w-[648px] h-[309px] rounded-[20px] shadow-lg">
        <h2 className="text-lg mb-4">Instructions</h2>
        <ul className="list-disc ml-6">
          <li>Lorem ipsum dolor sit amet consectetur.</li>
          <li>Lorem ipsum dolor sit amet consectetur.</li>
          <li>Lorem ipsum dolor sit amet consectetur.</li>
          <li>Lorem ipsum dolor sit amet consectetur.</li>
        </ul>
        <button
          onClick={onClose}
          className="mt-16 px-4 py-2 w-[600px] h-[48px] bg-[#4461F2] text-white rounded-full focus:outline-none"
        >
          Start
        </button>
      </div>
    </div>
  );
};

export default InstructionsList;
