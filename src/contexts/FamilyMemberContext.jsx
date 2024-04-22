import React, { createContext, useContext, useEffect, useState } from "react";

const FamilyMemberContext = createContext();

const useFamilyMember = () => {
  return useContext(FamilyMemberContext);
};

const DEFAULT_FAMILY_MEMBER = {
  id: 0,
  name: "",
  grossSalary: 0,
  netSalary: 0,
  isYoungAdult: false,
  isMarried: false,
  isEligibleForTaxAllowance: false,
  isEligibleForFamilyTaxAllowance: false
};

const FamilyMemberProvider = ({ children }) => {
  const [familyMembers, setFamilyMembers] = useState([DEFAULT_FAMILY_MEMBER]);
  const [selectedFamilyMember, setSelectedFamilyMember] = useState(() => familyMembers[0]);

  console.log(selectedFamilyMember, "selectedFamilyMember");
  console.log(familyMembers, "familyMembers");

  return (
    <FamilyMemberContext.Provider value={{ familyMembers, setFamilyMembers, selectedFamilyMember, setSelectedFamilyMember }}>
      {children}
    </FamilyMemberContext.Provider>
  );
};

export { FamilyMemberProvider, useFamilyMember };
