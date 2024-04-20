import { FaTrash as DeleteIcon } from "react-icons/fa";
import { useFamilyMember } from "../../contexts/FamilyMemberContext";
import SalaryCalculatorForm from "./components/SalaryCalculatorForm.jsx"

const SalaryCalculator = () => {
  const familyMemberContext = useFamilyMember();

  return (
    <div className="mb-2 flex justify-center">
      <div className="w-1/2 rounded-lg border border-gray-300 bg-gray-200 p-4">
        <div className="flex items-start justify-between">
          <p className="text-lg font-bold uppercase">{familyMemberContext.selectedFamilyMember.name} bérének a kiszámítása</p>
          <button type="button" className="h-10 rounded-lg border border-gray-300 px-4 py-2 hover:bg-white">
            <DeleteIcon />
          </button>
        </div>
        <SalaryCalculatorForm />
        <p className="text-center text-lg font-bold">Számított nettó bér:</p>
        <div className="text-center">
          <p className="inline-block w-1/4 rounded-lg border border-gray-300 px-4 py-2 text-xl font-bold">250.000 Ft</p>
        </div>
      </div>
    </div>
  );
};

export default SalaryCalculator;
