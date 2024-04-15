import { FaPlus as PlusIcon } from "react-icons/fa";

const FamilyMemberTabs = () => {
  return (
    <div className="container m-2">
      <div className="flex flex-nowrap items-center gap-x-1">
        <button
          type="button"
          className="h-10 rounded bg-sky-100 px-4 py-2 font-bold text-black hover:bg-blue-600"
        >
          Button
        </button>
        <button
          type="button"
          className="h-10 rounded bg-sky-100 px-4 py-2 font-bold text-black hover:bg-blue-600"
        >
          Button
        </button>
        <button
          type="button"
          className="h-10 rounded bg-sky-100 px-4 py-2 font-bold text-black hover:bg-blue-600"
        >
          <PlusIcon />
        </button>
      </div>
    </div>
  );
};

export default FamilyMemberTabs;
