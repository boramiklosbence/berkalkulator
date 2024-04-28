import { useFamilyMember } from "../../contexts/FamilyMemberContext.jsx";

const HouseholdSummary = () => {
  const { familyMembers, calculateTotalNetSalary } = useFamilyMember();

  return (
    <div className="mb-2 flex justify-center">
      <div className="w-1/2 rounded-lg border border-gray-300 bg-gray-200 p-4">
        <p className="mb-2 text-lg font-bold uppercase">Háztartás összesített jövedelme</p>
        <table className="w-full text-left text-sm text-black">
          <thead className="bg-gray-50 text-xs uppercase">
            <tr className="border-b">
              <th scope="col" className="px-6 py-3">
                Családtag
              </th>
              <th scope="col" className="px-6 py-3">
                Nettó bér
              </th>
            </tr>
          </thead>
          <tbody>
            {familyMembers.map((familyMember, index) => {
              return (
                <tr key={index} className="border-b bg-white">
                  <td className="whitespace-nowrap px-6 py-4 font-medium">{familyMember.name}</td>
                  <td className="px-6 py-4">{familyMember.netSalary}</td>
                </tr>
              );
            })}
            <tr className="border-b bg-white">
              <td className="whitespace-nowrap px-6 py-4 font-medium">Összesen:</td>
              <td className="px-6 py-4">{calculateTotalNetSalary()}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HouseholdSummary;
