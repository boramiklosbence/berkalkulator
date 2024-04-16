import { FaTrash as DeleteIcon } from "react-icons/fa";

const SalaryCalculator = () => {
  return (
    <div className="mb-2 flex justify-center">
      <div className="w-1/3 rounded bg-blue-100 p-4">
        <div class="flex items-start justify-between">
          <p className="text-lg font-bold uppercase">Noella bérének a kiszámítása</p>
          <button type="button" className="h-10 rounded bg-white px-4 py-2 hover:border-solid hover:border-gray-200 hover:bg-gray-100">
            <DeleteIcon />
          </button>
        </div>
        <form>
          {/* Name input */}
          <div className="mb-2">
            <label htmlFor="name" className="mb-1 block font-bold text-black">
              Családtag neve
            </label>
            <input
              type="text"
              id="name"
              className="block w-full rounded-lg border border-gray-300 bg-white p-2.5 text-black focus:border-blue-500 focus:ring-blue-500"
              placeholder=""
              defaultValue={"Noella"}
            />
          </div>
          {/* Salary input */}
          <div className="mb-2">
            <label htmlFor="name" className="mb-1 block font-bold text-black">
              Bruttó bér
            </label>
            <input
              type="number"
              id="name"
              className="block w-full rounded-lg border border-gray-300 bg-white p-2.5 text-black focus:border-blue-500 focus:ring-blue-500"
              placeholder=""
              value={250000}
            />
          </div>
          {/* Salary slider input */}
          <input
            type="range"
            class="transparent mb-4 h-2 w-full cursor-pointer appearance-none rounded-lg border-transparent bg-white"
            id="customRange1"
            min="1"
            max="100"
            step="1"
          />
          {/* Submit button input */}
          <div className="flex items-center justify-center justify-items-center gap-x-1">
            <button type="button" className="h-10 rounded bg-blue-200 px-4 py-2 font-bold text-black hover:bg-blue-600">
              -1%
            </button>
            <button type="button" className="h-10 rounded bg-blue-200 px-4 py-2 font-bold text-black hover:bg-blue-600">
              -5%
            </button>
            <button type="button" className="h-10 rounded bg-blue-200 px-4 py-2 font-bold text-black hover:bg-blue-600">
              +1%
            </button>
            <button type="button" className="h-10 rounded bg-blue-200 px-4 py-2 font-bold text-black hover:bg-blue-600">
              +5%
            </button>
          </div>
          {/* Discounts */}
          <p className="font-bold uppercase">Kedvezmények</p>
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
        <p className="font-bold">Számított nettó bér : 250.000 Ft</p>
      </div>
    </div>
  );
};

export default SalaryCalculator;
