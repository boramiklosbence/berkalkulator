import { FaPlus as PlusIcon } from "react-icons/fa";

const FamilyMemberTabs = () => {
  return (
    <div className="m-2 flex flex-nowrap items-center justify-center gap-x-1">
      <button type="button" className="h-10 rounded-lg border border-gray-300 bg-white px-4 py-2 text-black hover:py-0">
        Noella
      </button>
      <button type="button" className="h-10 rounded-lg border border-gray-300 bg-gray-200 px-4 py-2 text-black  hover:bg-white hover:py-0">
        Button
      </button>
      <button type="button" className="h-10 rounded-lg border border-gray-300 bg-gray-200 px-4 py-2 text-black  hover:bg-white hover:py-0">
        <PlusIcon />
      </button>
    </div>
  );
};

export default FamilyMemberTabs;
