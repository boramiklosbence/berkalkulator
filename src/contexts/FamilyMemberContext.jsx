import React, { createContext, useContext, useState } from "react";

const FamilyMemberContext = createContext();
const useFamilyMember = () => useContext(FamilyMemberContext);

const generateRandomId = () => {
  const timestamp = new Date().getTime();
  const random = Math.floor(Math.random() * 10000);
  return timestamp.toString() + random.toString();
};

const DEFAULT_FAMILY_MEMBER = {
  id: generateRandomId(),
  name: "",
  grossSalary: 0,
  netSalary: 0,
  marriageDate: undefined,
  numberOfDependents: 0,
  numberOfBeneficiaryDependents: 0,
  isYoungAdult: false,
  isMarried: false,
  isEligibleForTaxAllowance: false,
  isEligibleForFamilyTaxAllowance: false
};

const FamilyMemberProvider = ({ children }) => {
  const [familyMembers, setFamilyMembers] = useState([DEFAULT_FAMILY_MEMBER]);
  const [selectedFamilyMemberId, setSelectedFamilyMemberId] = useState(DEFAULT_FAMILY_MEMBER.id);

  const addFamilyMember = () => {
    const newFamilyMemberId = generateRandomId();
    setFamilyMembers(prevMembers => [...prevMembers, { ...DEFAULT_FAMILY_MEMBER, id: newFamilyMemberId }]);
    setSelectedFamilyMemberId(newFamilyMemberId);
  };

  const getSelectedFamilyMember = () => familyMembers.find(familyMember => familyMember.id === selectedFamilyMemberId);

  const updateSelectedFamilyMember = updatedData => {
    setFamilyMembers(prevMembers =>
      prevMembers.map(familyMember =>
        familyMember.id === selectedFamilyMemberId ? { ...familyMember, ...updatedData } : familyMember
      )
    );
  };

  const deleteSelectedFamilyMember = () => {
    const remainingFamilyMembers = familyMembers.filter(familyMember => familyMember.id !== selectedFamilyMemberId);
    setFamilyMembers(remainingFamilyMembers.length > 0 ? remainingFamilyMembers : [DEFAULT_FAMILY_MEMBER]);
    setSelectedFamilyMemberId(
      remainingFamilyMembers.length > 0
        ? remainingFamilyMembers[remainingFamilyMembers.length - 1].id
        : DEFAULT_FAMILY_MEMBER.id
    );
  };

  const contextValue = {
    familyMembers,
    selectedFamilyMemberId,
    setFamilyMembers,
    setSelectedFamilyMemberId,
    addFamilyMember,
    getSelectedFamilyMember,
    updateSelectedFamilyMember,
    deleteSelectedFamilyMember
  };

  return <FamilyMemberContext.Provider value={contextValue}>{children}</FamilyMemberContext.Provider>;
};

export { FamilyMemberProvider, useFamilyMember };
