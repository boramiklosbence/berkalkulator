import React from "react";

const SalaryMarriageDateInput = ({ label, name, formState, setFormState }) => {
  const handleInput = e => {
    setFormState({
      ...formState,
      [name]: e.target.value
    });
  };

  return (
    <div className="mb-2 flex items-center w-full">
      <label htmlFor={name} className="block text-black">{label}</label>
      <input type="date" name={name} className="block rounded-lg border border-gray-300 p-1 bg-white text-black focus:border-blue-500 focus:ring-blue-500" onChange={handleInput} value={formState[name] || ""}/>
    </div>
  );
};

export default SalaryMarriageDateInput;
