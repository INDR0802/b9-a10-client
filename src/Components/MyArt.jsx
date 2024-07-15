import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../firebase/AuthProvider";
import { NavLink } from "react-router-dom";

const MyArt = () => {
  let [allData, setAllData] = useState([]);
  let context = useContext(AuthContext);
  let { user } = context;
  let { email } = user || {};

  useEffect(() => {
    fetch(`https://artisan-avenue007.vercel.app/myarts/${email}`)
      .then((res) => res.json())
      .then((data) => setAllData(data));
  }, [email]);

  return (
    <div className="w-[800px] mx-auto my-10">
      <table className="divide-y divide-gray-200">
        <thead>
          <tr>
            <th className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Sl no.
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Art Name
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Sub Category
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Rating
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Customized
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Stock
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Action
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {allData.map((item, index) => {
            return (
              <tr key={item._id}>
                <td className="px-6 py-4 whitespace-nowrap">{index + 1}</td>
                <td className="px-6 py-4 whitespace-nowrap">{item.artName}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {item.subCatagory}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{item.rating}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {item.customized}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {item.stock === "In Stock" ? (
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-200 text-green-800">
                      {item.stock}
                    </span>
                  ) : (
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-200 text-red-800">
                      {item.stock}
                    </span>
                  )}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <NavLink
                    to={`/artDetails/${item._id}`}
                    className="btn px-4 py-2 font-medium text-white bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:shadow-outline-blue active:bg-blue-600 transition duration-150 ease-in-out">
                    Details
                  </NavLink>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default MyArt;
