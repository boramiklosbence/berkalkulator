import React from "react";

const SalarySliderInput = ({ min, max, step, name, formState, setFormState }) => {
  const handleInput = e => {
    setFormState({
      ...formState,
      [name]: e.target.value
    });
  };

  return (
    <div className="mb-2 w-full">
      <input
        type="range"
        name={name}
        className="transparent mb-4 h-2 w-full cursor-pointer appearance-none rounded-lg border border-gray-300 text-blue-500"
        min={min}
        max={max}
        step={step}
        value={formState[name]}
        onChange={handleInput}
      />
    </div>
  );
};

export default SalarySliderInput;
