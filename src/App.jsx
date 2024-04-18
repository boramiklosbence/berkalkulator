import HouseholdSalaryCalculator from "./components/HouseholdSalaryCalculator";
import { FamilyMemberProvider } from "./contexts/UserContaxt";

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
