import React from "react";

const UserTable = ({ user }) => {
  return (
    <>
      <tbody>
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 ">
          <th
            scope="row"
            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
          >
            <div className="flex items-center gap-2">
              <div>
                <img
                  src={user.image}
                  className="w-10 h-10 rounded-full"
                  alt=""
                />
              </div>
              <div>
                <h1 className="mb-1 text-gray-700 font-semibold hover:text-primary cursor-pointer">
                  {user.name}
                </h1>
                <h1 className="text-textColor text-xs">{user.gamil}</h1>
              </div>
            </div>
          </th>
          <td className="px-6 py-4 font-semibold">{user.date}</td>
          <td className="px-6 py-4 font-semibold">{user.amount}</td>
          <td className={`px-6 py-4 text-center`}>
            <button
              className={`px-4 py-2 text-xs  font-medium  rounded-lg  ${
                user.status === "approved"
                  ? "text-green-700 bg-green-100"
                  : "text-red-700 bg-red-100"
              }`}
            >
              {user.status}
            </button>
          </td>
          <td className="px-6 py-4 ">
            <button className="bg-gray-100 px-4 py-2 text-xs font-textColor font-medium hover:bg-gray-200 text-textColor rounded-lg">
              View
            </button>
          </td>
        </tr>
      </tbody>
    </>
  );
};

export default UserTable;
