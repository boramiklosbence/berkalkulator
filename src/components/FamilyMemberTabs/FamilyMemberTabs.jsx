import { FaPlus as PlusIcon } from "react-icons/fa";

const FamilyMemberTabs = () => {
  return (
    <div className="m-2 flex flex-nowrap items-center justify-center gap-x-1">
      <button type="button" className="h-10 rounded border border-black bg-gray-200 px-4 py-2 text-black  hover:bg-white hover:py-0">
        Button
      </button>
      <button type="button" className="h-10 rounded border border-black bg-gray-200 px-4 py-2 text-black  hover:bg-white hover:py-0">
        Button
      </button>
      <button type="button" className="h-10 rounded border border-black bg-gray-200 px-4 py-2 text-black  hover:bg-white hover:py-0">
        <PlusIcon />
      </button>
    </div>
  );
};

export default FamilyMemberTabs;
