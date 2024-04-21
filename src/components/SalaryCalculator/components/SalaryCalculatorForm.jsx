import React, { useEffect, useState } from "react";
import SalaryTextInput from "./SalaryTextInput.jsx";
import SalarySliderInput from "./SalarySliderInput.jsx";

const defaultState = {
  id: 1,
  name: "Noella",
  grossSalary: 0,
  netSalary: 0,
  isYoungAdult: false,
  isMarried: false,
  isEligibleForTaxAllowance: false,
  isEligibleForFamilyTaxAllowance: false
};

const SalaryCalculatorForm = () => {
  const [formState, setFormState] = useState(defaultState);

  // HANDLERS
  const handleButtonClick = (key, percentage) => {
    const value = formState[key];
    const newValue = Math.round(value * (1 + percentage / 100));

    setFormState({
      ...formState,
      [key]: newValue
    });
  };

  const handleCheckboxInput = key => {
    const value = formState[key];

    setFormState({
      ...formState,
      [key]: !value
    });
  };

  /*
    [checkbox] - 25 éven aluliak SZJA kedvezménye
    25 év alatt és bruttó max 499 952 Ft-ig érvényes
    Tehát ha valakinek a bruttó jövedelme 500 000 Ft, 499 952 Ft-ig a jövedelme SZJA mentes, 
    felette viszont a maradék 48 Ft után fizetnie kell a 15%-os jövedelemadót, 
    így tehát a maradék 48 Ft-ból ezt le kell vonni a nettó kiszámításánál

    [checkbox] - Személyi adókedvezmény
    Az adóelőleg alapja jogosultsági hónaponként a minimálbér egyharmadának száz forintra kerekített összegével,
    azaz 2023-ban havi 77 300 forinttal csökkenthető. Tehát ez szintén egy checkbox legyen,
    ahol az összes kiszámolt adót további 77 300 Ft-tal csökkentitek, ez egy fix kivonás a bejelölés esetén.
    Ha a 77 300 Ft több lenne, mint amennyi adót összesen fizet a megadott személy,
    természetesen nem lesz "plusz bevétele" ebből. 60 000 Ft adó fizetése esetén a maradék 17 300 Ft "elveszik".
  */

  // COMPONENT
  useEffect(() => {
    let value = formState["grossSalary"];
    let tax = 0;



    if(formState.isYoungAdult && value > 499_952) {
      const temp = value - 499_952;
      value = 499_952 + (temp * 0.85);
    }

    setFormState({
      ...formState,
      netSalary: value
    });
  }, [
    formState.grossSalary,
    formState.isYoungAdult,
    formState.isMarried,
    formState.isEligibleForTaxAllowance,
    formState.isEligibleForFamilyTaxAllowance
  ]);

  return (
    <div>
      <SalaryTextInput
        label="Családtag neve"
        name="name"
        formState={formState}
        setFormState={setFormState}
      />
      <SalaryTextInput
        label="Bruttó bér"
        name="grossSalary"
        formState={formState}
        setFormState={setFormState}
      />
      <SalarySliderInput
        min={0}
        max={1_000_000}
        step={1}
        name="grossSalary"
        formState={formState}
        setFormState={setFormState}
      />
      <div className="flex items-center justify-center justify-items-center gap-x-1">
        <button
          type="button"
          className="h-10 rounded-lg bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-600"
          onClick={() => handleButtonClick("grossSalary", -1)}
        >
          -1%
        </button>
        <button
          type="button"
          className="h-10 rounded-lg bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-600"
          onClick={() => handleButtonClick("grossSalary", -5)}
        >
          -5%
        </button>
        <button
          type="button"
          className="h-10 rounded-lg bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-600"
          onClick={() => handleButtonClick("grossSalary", 1)}
        >
          +1%
        </button>
        <button
          type="button"
          className="h-10 rounded-lg bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-600"
          onClick={() => handleButtonClick("grossSalary", 5)}
        >
          +5%
        </button>
      </div>
      <p className="font-bold uppercase">Kedvezmények</p>
      <div className="mb-2 flex items-center">
        <input
          type="checkbox"
          name="isYoungAdult"
          className="h-4 w-4 rounded-lg border border-gray-300 text-blue-500 focus:ring-2 focus:ring-blue-500"
          checked={formState["isYoungAdult"] === true}
          onChange={() => handleCheckboxInput("isYoungAdult")}
        />
        <label htmlFor="isYoungAdult" className="ms-2 text-black">
          25 év alattiak SZJA mentessége
        </label>
      </div>
      <div className="mb-2 flex items-center">
        <input
          type="checkbox"
          name="isMarried"
          className="h-4 w-4 rounded-lg border border-gray-300 text-blue-500 focus:ring-2 focus:ring-blue-500"
          checked={formState["isMarried"] === true}
          onChange={() => handleCheckboxInput("isMarried")}
        />
        <label htmlFor="isMarried" className="ms-2 text-black">
          Friss házasok kedvezménye
        </label>
      </div>
      <div className="mb-2 flex items-center">
        <input
          type="checkbox"
          name="isEligibleForTaxAllowance"
          className="h-4 w-4 rounded-lg border border-gray-300 text-blue-500 focus:ring-2 focus:ring-blue-500"
          checked={formState["isEligibleForTaxAllowance"] === true}
          onChange={() => handleCheckboxInput("isEligibleForTaxAllowance")}
        />
        <label htmlFor="isEligibleForTaxAllowance" className="ms-2 text-black">
          Személyi adókedvezmény
        </label>
      </div>
      <div className="mb-2 flex items-center">
        <input
          type="checkbox"
          name="isEligibleForFamilyTaxAllowance"
          className="h-4 w-4 rounded-lg border border-gray-300 text-blue-500 focus:ring-2 focus:ring-blue-500"
          checked={formState["isEligibleForFamilyTaxAllowance"] === true}
          onChange={() => handleCheckboxInput("isEligibleForFamilyTaxAllowance")}
        />
        <label htmlFor="isEligibleForFamilyTaxAllowance" className="ms-2 text-black">
          Családi kedvezmény
        </label>
      </div>
      <h1>{formState.netSalary}</h1>
    </div>
  );
};

export default SalaryCalculatorForm;
