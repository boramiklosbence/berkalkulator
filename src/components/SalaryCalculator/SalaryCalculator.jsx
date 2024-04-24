import { FaTrash as DeleteIcon } from "react-icons/fa";
import { useFamilyMember } from "../../contexts/FamilyMemberContext.jsx";
import React, { useEffect } from "react";
import SalaryButton from "./components/SalaryButton.jsx";
import SalaryCheckbox from "./components/SalaryCheckbox.jsx";
import SalarySliderInput from "./components/SalarySliderInput.jsx";
import SalaryTextInput from "./components/SalaryTextInput.jsx";
import SalaryDependentInput from "./components/SalaryDependentInput.jsx";

const SalaryCalculator = () => {
  const { getSelectedFamilyMember, updateSelectedFamilyMember, deleteSelectedFamilyMember } = useFamilyMember();
  const selectedFamilyMember = getSelectedFamilyMember();

  useEffect(() => {
    let value = selectedFamilyMember.grossSalary;

    updateSelectedFamilyMember({
      ...getSelectedFamilyMember(),
      netSalary: value
    });
  }, [
    selectedFamilyMember.grossSalary,
    selectedFamilyMember.isYoungAdult,
    selectedFamilyMember.isMarried,
    selectedFamilyMember.isEligibleForTaxAllowance,
    selectedFamilyMember.isEligibleForFamilyTaxAllowance
  ]);

  return (
    <div className="mb-2 flex justify-center">
      <div className="w-1/2 rounded-lg border border-gray-300 bg-gray-200 p-4">
        <div className="flex items-start justify-between">
          <p className="text-lg font-bold uppercase">{selectedFamilyMember.name} bérének a kiszámítása</p>
          <button
            type="button"
            className="h-10 rounded-lg border border-gray-300 px-4 py-2 hover:bg-white"
            onClick={() => deleteSelectedFamilyMember()}
          >
            <DeleteIcon />
          </button>
        </div>
        <SalaryTextInput
          type={"text"}
          label={"Családtag neve"}
          name={"name"}
          placeHolder={"Név"}
          formState={selectedFamilyMember}
          setFormState={updateSelectedFamilyMember}
        />
        <SalaryTextInput
          type={"number"}
          label={"Bruttó bér"}
          name={"grossSalary"}
          placeHolder={"0"}
          formState={selectedFamilyMember}
          setFormState={updateSelectedFamilyMember}
        />
        <SalarySliderInput
          min={0}
          max={1_000_000}
          step={1}
          name="grossSalary"
          formState={selectedFamilyMember}
          setFormState={updateSelectedFamilyMember}
        />
        <div className="flex items-center justify-center justify-items-center gap-x-1">
          <SalaryButton
            percentage={-1}
            name={"grossSalary"}
            formState={selectedFamilyMember}
            setFormState={updateSelectedFamilyMember}
          />
          <SalaryButton
            percentage={-5}
            name={"grossSalary"}
            formState={selectedFamilyMember}
            setFormState={updateSelectedFamilyMember}
          />
          <SalaryButton
            percentage={1}
            name={"grossSalary"}
            formState={selectedFamilyMember}
            setFormState={updateSelectedFamilyMember}
          />
          <SalaryButton
            percentage={5}
            name={"grossSalary"}
            formState={selectedFamilyMember}
            setFormState={updateSelectedFamilyMember}
          />
        </div>
        <div>
          <p className="font-bold uppercase">Kedvezmények</p>
          <SalaryCheckbox
            label={"25 év alattiak SZJA mentessége"}
            name={"isYoungAdult"}
            formState={selectedFamilyMember}
            setFormState={updateSelectedFamilyMember}
          />
          <SalaryCheckbox
            label={"Friss házasok kedvezménye"}
            name={"isMarried"}
            formState={selectedFamilyMember}
            setFormState={updateSelectedFamilyMember}
          />
          <SalaryCheckbox
            label={"Személyi adókedvezmény"}
            name={"isEligibleForTaxAllowance"}
            formState={selectedFamilyMember}
            setFormState={updateSelectedFamilyMember}
          />
          <SalaryCheckbox
            label={"Családi kedvezmény"}
            name={"isEligibleForFamilyTaxAllowance"}
            formState={selectedFamilyMember}
            setFormState={updateSelectedFamilyMember}
          />
          {selectedFamilyMember.isEligibleForFamilyTaxAllowance && (
            <SalaryDependentInput formState={selectedFamilyMember} setFormState={updateSelectedFamilyMember} />
          )}
        </div>
        <div className="text-center mt-5">
          <p className="text-xl font-bold">Számított nettó bér:</p>
          <p className="inline-block w-1/4 rounded-lg border border-gray-300 px-4 py-2 text-xl font-bold">
            {selectedFamilyMember.netSalary}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SalaryCalculator;
