import React from "react";

const SalaryCheckbox = ({ label, name, formState, setFormState }) => {
  const isChecked = () => formState[name];

  const handleCheckboxInput = () => {
    const value = formState[name];

    setFormState({
      ...formState,
      [name]: !value
    });
  };

  return (
    <div className="mb-2 flex items-center">
      <input
        type="checkbox"
        id={name}
        className="h-4 w-4 rounded-lg border border-gray-300 text-blue-500 focus:ring-2 focus:ring-blue-500"
        checked={isChecked()}
        onChange={handleCheckboxInput}
      />
      <label htmlFor={name} className="ms-2 text-black">
        {label}
      </label>
    </div>
  );
};

export default SalaryCheckbox;
