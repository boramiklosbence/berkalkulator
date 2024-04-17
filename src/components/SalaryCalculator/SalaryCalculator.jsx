import { FaTrash as DeleteIcon } from "react-icons/fa";

const SalaryCalculator = () => {
  return (
    <div className="mb-2 flex justify-center">
      <div className="w-1/2 rounded-lg border border-gray-300 bg-gray-200 p-4">
        <div class="flex items-start justify-between">
          <p className="text-lg font-bold uppercase">Noella bérének a kiszámítása</p>
          <button type="button" className="h-10 rounded-lg border border-gray-300 px-4 py-2 hover:bg-white">
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
            class="transparent mb-4 h-2 w-full cursor-pointer appearance-none rounded-lg border border-gray-300 text-blue-500"
            id="customRange1"
            min="1"
            max="100"
            step="1"
          />
          {/* Submit button input */}
          <div className="flex items-center justify-center justify-items-center gap-x-1">
            <button type="button" className="h-10 rounded-lg bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-600">
              -1%
            </button>
            <button type="button" className="h-10 rounded-lg bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-600">
              -5%
            </button>
            <button type="button" className="h-10 rounded-lg bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-600">
              +1%
            </button>
            <button type="button" className="h-10 rounded-lg bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-600">
              +5%
            </button>
          </div>
          {/* Discounts */}
          <p className="font-bold uppercase">Kedvezmények</p>
          <div class="mb-2 flex items-center">
            <input
              id="default-checkbox-1"
              type="checkbox"
              value=""
              className="h-4 w-4 rounded-lg border border-gray-300 text-blue-500 focus:ring-2 focus:ring-blue-500"
            />
            <label htmlFor="default-checkbox-1" className="ms-2 text-black">
              25 év alattiak SZJA mentessége
            </label>
          </div>
          <div class="mb-2 flex items-center">
            <input
              id="checked-checkbox-2"
              type="checkbox"
              value=""
              className="h-4 w-4 rounded-lg border border-gray-300 text-blue-500 focus:ring-2 focus:ring-blue-500"
            />
            <label htmlFor="checked-checkbox-2" className="ms-2 text-black">
              Friss házasok kedvezménye
            </label>
          </div>
          <div class="mb-2 flex items-center">
            <input
              id="default-checkbox-3"
              type="checkbox"
              value=""
              className="h-4 w-4 rounded-lg border border-gray-300 text-blue-500 focus:ring-2 focus:ring-blue-500"
            />
            <label htmlFor="default-checkbox-3" className="ms-2 text-black">
              Személyi adókedvezmény
            </label>
          </div>
          <div class="mb-2 flex items-center">
            <input
              id="default-checkbox-4"
              type="checkbox"
              value=""
              className="h-4 w-4 rounded-lg border border-gray-300 text-blue-500 focus:ring-2 focus:ring-blue-500"
            />
            <label htmlFor="default-checkbox-4" className="ms-2 text-black">
              Családi kedvezmény
            </label>
          </div>
        </form>
        <p className="text-center text-lg font-bold">Számított nettó bér:</p>
        <div className="text-center">
          <p className="inline-block w-1/4 rounded-lg border border-gray-300 px-4 py-2 text-xl font-bold">250.000 Ft</p>
        </div>
      </div>
    </div>
  );
};

export default SalaryCalculator;
