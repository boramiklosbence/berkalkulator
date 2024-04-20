import HouseholdSalaryCalculator from "./components/HouseholdSalaryCalculator";
import { FamilyMemberProvider } from "./contexts/FamilyMemberContext";

function App() {
  return (
    <FamilyMemberProvider>
      <div>
        <HouseholdSalaryCalculator />
      </div>
    </FamilyMemberProvider>
  );
}

export default App;
