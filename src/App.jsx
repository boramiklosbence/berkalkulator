import HouseholdSalaryCalculator from "./components/HouseholdSalaryCalculator";
import { FamilyMemberProvider } from "./contexts/FamilyMemberContext";

function App() {
  return (
    <FamilyMemberProvider>
      <HouseholdSalaryCalculator />
    </FamilyMemberProvider>
  );
}

export default App;
