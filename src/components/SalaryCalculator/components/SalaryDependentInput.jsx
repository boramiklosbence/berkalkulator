import React from "react";
import { FaPlus as PlusIcon } from "react-icons/fa";
import { FaMinus as MinusIcon } from "react-icons/fa";

const SalaryDependentInput = ({ formState, setFormState }) => {
  const handleDependentInput = value => {
    const dependents = formState.numberOfDependents + value >= 0 ? formState.numberOfDependents + value : 0;

    setFormState({
      ...formState,
      numberOfDependents: dependents
    });
  };

  const handleBeneficiaryDependentInput = value => {
    let beneficiaryDependents = formState.numberOfBeneficiaryDependents + value;

    if (formState.numberOfDependents >= 3 && beneficiaryDependents >= 3) {
      beneficiaryDependents = 3;
    }

    if (formState.numberOfDependents <= 3 && beneficiaryDependents > formState.numberOfDependents) {
      beneficiaryDependents = formState.numberOfDependents;
    }

    if (beneficiaryDependents < 0) {
      beneficiaryDependents = 0;
    }

    setFormState({
      ...formState,
      numberOfBeneficiaryDependents: beneficiaryDependents
    });
  };

  return (
    <div className="flex items-center gap-x-1">
      <button
        type="button"
        className="h-6 rounded-lg bg-blue-500 px-2 py-1 text-xs font-bold text-white hover:bg-blue-600"
        onClick={() => handleDependentInput(1)}
      >
        <PlusIcon />
      </button>
      {formState.numberOfDependents}
      <button
        type="button"
        className="h-6 rounded-lg bg-blue-500 px-2 py-1 text-xs font-bold text-white hover:bg-blue-600"
        onClick={() => handleDependentInput(-1)}
      >
        <MinusIcon />
      </button>
      Eltartott, ebből kedveznényezett:
      <button
        type="button"
        className="h-6 rounded-lg bg-blue-500 px-2 py-1 text-xs font-bold text-white hover:bg-blue-600"
        onClick={() => handleBeneficiaryDependentInput(1)}
      >
        <PlusIcon />
      </button>
      {formState.numberOfBeneficiaryDependents}
      <button
        type="button"
        className="h-6 rounded-lg bg-blue-500 px-2 py-1 text-xs font-bold text-white hover:bg-blue-600"
        onClick={() => handleBeneficiaryDependentInput(-1)}
      >
        <MinusIcon />
      </button>
    </div>
  );
};

export default SalaryDependentInput;
