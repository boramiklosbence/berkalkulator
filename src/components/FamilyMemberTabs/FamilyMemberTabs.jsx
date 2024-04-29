import React from "react";
import { FaPlus as PlusIcon } from "react-icons/fa";
import { useFamilyMember } from "../../contexts/FamilyMemberContext";

const FamilyMemberTabs = () => {
  const { familyMembers, addFamilyMember, selectedFamilyMemberId, setSelectedFamilyMemberId } = useFamilyMember();

  const handleFamilyMemberClick = id => {
    setSelectedFamilyMemberId(id);
  };

  return (
    <div className="m-2 flex items-center justify-center gap-x-1">
      {familyMembers.map(({ id, name }) => (
        <button
          key={id}
          type="button"
          className={`h-10 rounded-lg border border-gray-300 px-4 py-2 text-black ${id === selectedFamilyMemberId ? "bg-white" : "bg-gray-200 hover:bg-white"}`}
          onClick={() => handleFamilyMemberClick(id)}
        >
          {name}
        </button>
      ))}
      <button
        type="button"
        className="h-10 rounded-lg border border-gray-300 bg-gray-200 px-4 py-2 text-black hover:bg-white"
        onClick={addFamilyMember}
      >
        <PlusIcon />
      </button>
    </div>
  );
};

export default FamilyMemberTabs;
