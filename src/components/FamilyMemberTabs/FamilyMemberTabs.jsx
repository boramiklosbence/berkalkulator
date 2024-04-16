import { FaPlus as PlusIcon } from "react-icons/fa";

const FamilyMemberTabs = () => {
  return (
    <div className="m-2 flex flex-nowrap items-center justify-center gap-x-1">
      <button type="button" className="h-10 rounded bg-blue-100 px-4 py-2 text-black hover:bg-blue-600">
        Button
      </button>
      <button type="button" className="h-10 rounded bg-blue-100 px-4 py-2 text-black hover:bg-blue-600">
        Button
      </button>
      <button type="button" className="h-10 rounded bg-blue-100 px-4 py-2 text-black hover:bg-blue-600">
        <PlusIcon />
      </button>
    </div>
  );
};

export default FamilyMemberTabs;
