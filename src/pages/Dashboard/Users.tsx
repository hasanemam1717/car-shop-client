import { useGetAllUserQuery } from "../../redux/feature/admin/adminApi";

const Users = () => {
  const { data } = useGetAllUserQuery(undefined);

  return (
    <div className="container mx-auto px-4  sm:p-0">
      <h1 className="text-2xl font-bold mb-6 text-center">User List</h1>

      {/* Responsive Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead className="bg-red-600 text-white">
            <tr>
              <th className="p-3 text-left whitespace-nowrap">Name</th>
              <th className="p-3 text-left whitespace-nowrap">Email</th>
              <th className="p-3 text-left whitespace-nowrap">Role</th>
              <th className="p-3 text-center whitespace-nowrap">Status</th>
            </tr>
          </thead>
          <tbody>
            {data?.userData?.map((user: any) => (
              <tr
                key={user.id}
                className="border-b hover:bg-gray-100 transition"
              >
                <td className="p-3 text-sm">{user.name}</td>
                <td className="p-3 text-sm break-all">{user.email}</td>
                <td className="p-3 text-sm">{user.role}</td>
                <td className="p-3 text-center">
                  {user.isBlocked ? (
                    <span className="text-red-600 font-semibold">Blocked</span>
                  ) : (
                    <span className="text-green-600 font-semibold">Active</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
