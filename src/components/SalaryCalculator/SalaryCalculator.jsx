import { FaTrash as DeleteIcon } from "react-icons/fa";
import { useFamilyMember } from "../../contexts/FamilyMemberContext.jsx";
import React, { useEffect } from "react";
import SalaryButton from "./components/SalaryButton.jsx";
import SalaryCheckbox from "./components/SalaryCheckbox.jsx";
import SalarySliderInput from "./components/SalarySliderInput.jsx";
import SalaryTextInput from "./components/SalaryTextInput.jsx";

const SalaryCalculator = () => {
  const { selectedFamilyMember, setSelectedFamilyMember } = useFamilyMember();

  useEffect(() => {
    let value = selectedFamilyMember.grossSalary;

    setSelectedFamilyMember({
      ...selectedFamilyMember,
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
          <button type="button" className="h-10 rounded-lg border border-gray-300 px-4 py-2 hover:bg-white">
            <DeleteIcon />
          </button>
        </div>
        <SalaryTextInput
          label="Családtag neve"
          name="name"
          formState={selectedFamilyMember}
          setFormState={setSelectedFamilyMember}
        />
        <SalaryTextInput
          label="Bruttó bér"
          name="grossSalary"
          formState={selectedFamilyMember}
          setFormState={setSelectedFamilyMember}
        />
        <SalarySliderInput
          min={0}
          max={1_000_000}
          step={1}
          name="grossSalary"
          formState={selectedFamilyMember}
          setFormState={setSelectedFamilyMember}
        />
        <div className="flex items-center justify-center justify-items-center gap-x-1">
          <SalaryButton
            percentage={-1}
            name={"grossSalary"}
            formState={selectedFamilyMember}
            setFormState={setSelectedFamilyMember}
          />
          <SalaryButton
            percentage={-5}
            name={"grossSalary"}
            formState={selectedFamilyMember}
            setFormState={setSelectedFamilyMember}
          />
          <SalaryButton
            percentage={1}
            name={"grossSalary"}
            formState={selectedFamilyMember}
            setFormState={setSelectedFamilyMember}
          />
          <SalaryButton
            percentage={5}
            name={"grossSalary"}
            formState={selectedFamilyMember}
            setFormState={setSelectedFamilyMember}
          />
        </div>
        <div>
          <p className="font-bold uppercase">Kedvezmények</p>
          <SalaryCheckbox
            label={"25 év alattiak SZJA mentessége"}
            name={"isYoungAdult"}
            formState={selectedFamilyMember}
            setFormState={setSelectedFamilyMember}
          />
          <SalaryCheckbox
            label={"Friss házasok kedvezménye"}
            name={"isMarried"}
            formState={selectedFamilyMember}
            setFormState={setSelectedFamilyMember}
          />
          <SalaryCheckbox
            label={"Személyi adókedvezmény"}
            name={"isEligibleForTaxAllowance"}
            formState={selectedFamilyMember}
            setFormState={setSelectedFamilyMember}
          />
          <SalaryCheckbox
            label={"Családi kedvezmény"}
            name={"isEligibleForFamilyTaxAllowance"}
            formState={selectedFamilyMember}
            setFormState={setSelectedFamilyMember}
          />
        </div>
        <div className="text-center">
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
