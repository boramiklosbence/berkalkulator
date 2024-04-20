import React from "react";

const TextInput = ({ label, name, formState, setFormState }) => {
  const handleInput = e => {
    setFormState({
      ...formState,
      [name]: e.target.value
    });
  };

  return (
    <div className="mb-2 w-full">
      <label htmlFor="name" className="mb-1 block font-bold text-black">
        {label}
      </label>
      <input
        type="text"
        name={name}
        className="block w-full rounded-lg border border-gray-300 bg-white p-2.5 text-black focus:border-blue-500 focus:ring-blue-500"
        onInput={handleInput}
        value={formState[name]}
      />
    </div>
  );
};

export default TextInput;
