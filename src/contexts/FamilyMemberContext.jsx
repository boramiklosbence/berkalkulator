import React, { createContext, useContext, useState } from "react";

const FamilyMemberContext = createContext();

const useFamilyMember = () => {
  return useContext(FamilyMemberContext);
};

const DEFAULT_FAMILY_MEMBER = {
  id: 0,
  name: "",
  grossSalary: undefined,
  netSalary: undefined,
  isYoungAdult: false,
  isMarried: false,
  isEligibleForTaxAllowance: false,
  isEligibleForFamilyTaxAllowance: false
};

const FamilyMemberProvider = ({ children }) => {
  const [familyMembers, setFamilyMembers] = useState([DEFAULT_FAMILY_MEMBER]);
  const [selectedFamilyMemberId, setSelectedFamilyMemberId] = useState(0);

  const addFamilyMember = () => {
    const newFamilyMembers = [...familyMembers, DEFAULT_FAMILY_MEMBER];
    setFamilyMembers(newFamilyMembers);
    setSelectedFamilyMemberId(DEFAULT_FAMILY_MEMBER.id);
  };

  const getSelectedFamilyMember = () => familyMembers.find(member => member.id === selectedFamilyMemberId);

  const updateSelectedFamilyMember = (updatedData) => {
    setFamilyMembers(prevMembers => {
      return prevMembers.map(familyMember => {
        return familyMember.id === selectedFamilyMemberId ? { ...familyMember, ...updatedData } : familyMember;
      });
    });
  };

  const deleteSelectedFamilyMember = () => {
    const remainingFamilyMembers = familyMembers.filter(member => member.id !== selectedFamilyMemberId);
    setFamilyMembers(remainingFamilyMembers.length > 0 ? remainingFamilyMembers : [DEFAULT_FAMILY_MEMBER]);
    setSelectedFamilyMemberId(0);
  };

  const value = {
    familyMembers,
    setFamilyMembers,
    selectedFamilyMemberId,
    setSelectedFamilyMemberId,
    addFamilyMember,
    getSelectedFamilyMember,
    updateSelectedFamilyMember,
    deleteSelectedFamilyMember
  };

  return <FamilyMemberContext.Provider value={value}>{children}</FamilyMemberContext.Provider>;
};

export { FamilyMemberProvider, useFamilyMember };
