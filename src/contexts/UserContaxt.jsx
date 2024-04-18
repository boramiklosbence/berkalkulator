import React, { createContext, useContext, useState } from "react";

const FamilyMemberContext = createContext();

const FamilyMemberProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === "light" ? "dark" : "light"));
  };

  return <FamilyMemberContext.Provider value={{ theme, toggleTheme }}>{children}</FamilyMemberContext.Provider>;
};

const useFamilyMember = () => {
  return useContext(FamilyMemberContext);
};

export { FamilyMemberProvider, useFamilyMember };
