import React from "react";
import axios from "axios";

function Users({ users }) {
  return (
    <div className="container mx-auto p-4 text-black">
      <h1 className="text-2xl font-bold mb-4 text-white">User List</h1>
      <div className="">
        <table className="w-full border-collapse bg-white border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-2 py-2 border-b border-gray-300">ID</th>
              <th className="px-2 py-2 border-b border-gray-300">Name</th>
              <th className="px-2 py-2 border-b border-gray-300">Username</th>
              <th className="px-2 py-2 border-b border-gray-300">Email</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="hover:bg-gray-50">
                <td className="px-4 py-2 border-b border-gray-300">
                  {user.id}
                </td>
                <td className="px-4 py-2 border-b border-gray-300">
                  {user.name}
                </td>
                <td className="px-4 py-2 border-b border-gray-300">
                  {user.username}
                </td>
                <td className="px-4 py-2 border-b border-gray-300">
                  {user.email}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Users;
//SSG------------> Server Side Gender feature in Next.js
export async function getServerSideProps() {
  try {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");
    const users = res.data;
    return {
      props: {
        users,
      },
    };
  } catch (error) {
    console.error("Error fetching users:", error);
    return {
      props: {
        users: [],
      },
    };
  }
}
