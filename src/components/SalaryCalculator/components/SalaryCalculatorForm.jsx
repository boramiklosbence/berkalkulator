import React, { useState } from "react";
import TextInput from "./TextInput";

const defaultState = {
  id: 1,
  name: "Noella",
  grossSalary: "",
  netSalary: "",
  isYoungAdult: "false",
  isMarried: "false",
  isEligibleForTaxAllowance: "false",
  isEligibleForFamilyTaxAllowance: "false"
};

const SalaryCalculatorForm = () => {
  const [formState, setFormState] = useState(defaultState);

  /*
    useEffect(() => {
        if (edit) setFormState(edit);
    }, [edit]);

    const handleSave = () => {
        if (edit === null) {
        let maxid = 0;
        for (let i = 0; i < tracks.length; i++) {
            if (maxii < tracks[i].id) maxid = tracks[i].id;
        }
        setTracks([{ ...formState, id: ++maxid }, ...tracks]);
        } else {
            const ind = tracks.findIndex(e => e.id === formState.id);
            setTracks([...tracks.slice(0, ind), formState, ...tracks.slice(ind + 1)]);
        }

        setOpen(false);
        setEdit(null);
        };
    }
  */

  return (
    <div>
      <TextInput label="Családtag neve" name="name" formState={formState} setFormState={setFormState} />
      <TextInput label="Bruttó bér" name="grossSalary" formState={formState} setFormState={setFormState} />

      {/* Salary slider input */}
      <input
        type="range"
        className="transparent mb-4 h-2 w-full cursor-pointer appearance-none rounded-lg border border-gray-300 text-blue-500"
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
      <div className="mb-2 flex items-center">
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
      <div className="mb-2 flex items-center">
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
      <div className="mb-2 flex items-center">
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
      <div className="mb-2 flex items-center">
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
      <div className="w-2/12 text-center align-bottom">
        <button onClick={handleSave} className="btn btn-primary flex-center mr-2 mt-5 flex w-20 p-2  font-bold">
          Save
        </button>
      </div>
    </div>
  )
    ;
};

export default SalaryCalculatorForm;
