import React from "react";

const SalaryMarriageDateInput = ({ label, name, isEligibleForMarriageBonus, formState, setFormState }) => {
  const handleInput = e => {
    setFormState({
      ...formState,
      [name]: e.target.value
    });
  };

  return (
    <div className="mb-2 flex w-full items-center gap-x-1">
      <label htmlFor={name} className="block text-black">
        {label}
      </label>
      <input
        type="date"
        name={name}
        className="block rounded-lg border border-gray-300 bg-white p-1 text-black focus:border-blue-500 focus:ring-blue-500"
        onChange={handleInput}
        value={formState[name] || ""}
      />
      <span
        className={`block rounded-lg border border-gray-300 p-1 ${isEligibleForMarriageBonus ? "bg-green-500" : "bg-red-500"} text-center text-white`}
      >
        {isEligibleForMarriageBonus ? "Jogosult" : "Nem jogosult"}
      </span>
    </div>
  );
};

export default SalaryMarriageDateInput;
