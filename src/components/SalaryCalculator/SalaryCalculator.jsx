import { FaTrash as DeleteIcon } from "react-icons/fa";

const SalaryCalculator = () => {
  return (
    <div className="inline-block w-1/2 rounded bg-sky-100 p-4">
      <div class="flex items-start justify-between">
        <h1 className="font-bold">Noella bérének a kiszámítása</h1>
        <button type="button" className="h-10 rounded bg-sky-200 px-4 py-2 font-bold text-black hover:bg-blue-600">
          <DeleteIcon />
        </button>
      </div>
      <form>
        {/* Name input */}
        <label htmlFor="name" className="mb-2 block text-black">
          Családtag neve
        </label>
        <input
          type="text"
          id="name"
          aria-describedby="helper-text-explanation"
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-black focus:border-blue-500 focus:ring-blue-500"
          placeholder=""
          defaultValue={"Noella"}
        />
        <p id="helper-text-explanation" className="mt-2 text-black">
          Add meg a családtag nevét!
        </p>
        {/* Salary input */}
        <label htmlFor="name" className="mb-2 block text-black">
          Bruttó bér
        </label>
        <input
          type="text"
          id="name"
          aria-describedby="helper-text-explanation-2"
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-black focus:border-blue-500 focus:ring-blue-500"
          placeholder=""
          value={"250.000 Ft"}
        />
        <p id="helper-text-explanation-2" className="mt-2 text-black">
          Add meg a bruttó béredet!
        </p>
        {/* Salary slider input */}
        <input type="range" min="0" max="5" value="2.5" step="0.5" className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-gray-200" />
        {/* Submit button input */}
        <div className="flex w-full items-center justify-center justify-items-center gap-x-1">
          <button type="button" className="h-10 rounded bg-sky-200 px-4 py-2 font-bold text-black hover:bg-blue-600">
            -1%
          </button>
          <button type="button" className="h-10 rounded bg-sky-200 px-4 py-2 font-bold text-black hover:bg-blue-600">
            -5%
          </button>
          <button type="button" className="h-10 rounded bg-sky-200 px-4 py-2 font-bold text-black hover:bg-blue-600">
            +1%
          </button>
          <button type="button" className="h-10 rounded bg-sky-200 px-4 py-2 font-bold text-black hover:bg-blue-600">
            +5%
          </button>
        </div>
        {/* Discounts */}
        <h2 className="font-bold">Kedvezmények</h2>
        <div class="mb-2 flex items-center">
          <input
            id="default-checkbox"
            type="checkbox"
            value=""
            className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500"
          />
          <label htmlFor="default-checkbox" className="ms-2 text-black">
            25 év alattiak SZJA mentessége
          </label>
        </div>
        <div class="mb-2 flex items-center">
          <input
            checked
            id="checked-checkbox"
            type="checkbox"
            value=""
            className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500"
          />
          <label htmlFor="checked-checkbox" className="ms-2 text-black">
            Friss házasok kedvezménye
          </label>
        </div>
        <div class="mb-2 flex items-center">
          <input
            id="default-checkbox"
            type="checkbox"
            value=""
            className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500"
          />
          <label htmlFor="default-checkbox" className="ms-2 text-black">
            Személyi adókedvezmény
          </label>
        </div>
        <div class="mb-2 flex items-center">
          <input
            id="default-checkbox"
            type="checkbox"
            value=""
            className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500"
          />
          <label htmlFor="default-checkbox" className="ms-2 text-black">
            Családi kedvezmény
          </label>
        </div>
      </form>
      <h1 className="font-bold">Számított nettó bér : 250.000 Ft</h1>
    </div>
  );
};

export default SalaryCalculator;
