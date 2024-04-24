import { FaPlus as PlusIcon } from "react-icons/fa";
import { useFamilyMember } from "../../contexts/FamilyMemberContext.jsx";

const FamilyMemberTabs = () => {
  const { familyMembers, addFamilyMember, selectedFamilyMemberId, setSelectedFamilyMemberId } = useFamilyMember();

  return (
    <div className="m-2 flex flex-nowrap items-center justify-center gap-x-1">
      {familyMembers.map(familyMember => {
        return (
          <button
            key={familyMember.id}
            type="button"
            className={`h-10 rounded-lg border border-gray-300 ${familyMember.id === selectedFamilyMemberId ? "bg-white" : "bg-gray-200"} px-4 py-2 text-black ${familyMember.id !== selectedFamilyMemberId ? "hover:bg-white" : ""} hover:py-0`}
            onClick={() => setSelectedFamilyMemberId(familyMember.id)}
          >
            {familyMember.name}
          </button>
        );
      })}
      <button
        type="button"
        className="h-10 rounded-lg border border-gray-300 bg-gray-200 px-4 py-2 text-black  hover:bg-white hover:py-0"
        onClick={() => addFamilyMember()}
      >
        <PlusIcon />
      </button>
    </div>
  );
};

export default FamilyMemberTabs;
