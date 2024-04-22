import React from "react";

const SalaryButton = ({ percentage, name, formState, setFormState }) => {
  const handleButtonClick = () => {
    const value = formState[name];
    const newValue = Math.round(value * (1 + percentage / 100));

    setFormState({
      ...formState,
      [name]: newValue
    });
  };

  return (
    <div>
      <button
        type="button"
        className="h-10 rounded-lg bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-600"
        onClick={handleButtonClick}
      >
        {percentage}%
      </button>
    </div>
  );
};

export default SalaryButton;
