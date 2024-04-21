import React, { createContext, useContext, useState } from "react";

const FamilyMemberContext = createContext();

const useFamilyMember = () => {
  return useContext(FamilyMemberContext);
};

const DEFAULT_FAMILY_MEMBER = {
  id: 1,
  name: "Noella",
  grossSalary: "230000",
  netSalary: "210000",
  isYoungAdult: "false",
  isMarried: "false",
  isEligibleForTaxAllowance: "false",
  isEligibleForFamilyTaxAllowance: "false"
};

const FamilyMemberProvider = ({ children }) => {
  const [familyMembers, setFamilyMembers] = useState([DEFAULT_FAMILY_MEMBER]);
  const [selectedFamilyMember, setSelectedFamilyMember] = useState(DEFAULT_FAMILY_MEMBER);

  return (
    <FamilyMemberContext.Provider value={{ familyMembers, selectedFamilyMember }}>
      {children}
    </FamilyMemberContext.Provider>
  );
};

export { FamilyMemberProvider, useFamilyMember };
