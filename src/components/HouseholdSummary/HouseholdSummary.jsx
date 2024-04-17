const HouseholdSummary = () => {
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
            <tr className="border-b bg-white">
              <td className="whitespace-nowrap px-6 py-4 font-medium">Apple MacBook Pro 17"</td>
              <td className="px-6 py-4">Silver</td>
            </tr>
            <tr className="border-b bg-white">
              <td className="whitespace-nowrap px-6 py-4 font-medium">Microsoft Surface Pro</td>
              <td className="px-6 py-4">White</td>
            </tr>
            <tr className="bg-white">
              <td className="whitespace-nowrap px-6 py-4 font-medium">Magic Mouse 2</td>
              <td className="px-6 py-4">Black</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HouseholdSummary;
