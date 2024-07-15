import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";

const SubCatagoryDetails = () => {
  const { id } = useParams();
  let [cardData, setCardData] = useState([]);
  useEffect(() => {
    fetch(`https://artisan-avenue007.vercel.app/subcatagory/${id}`)
      .then((res) => res.json())
      .then((data) => setCardData(data));
  }, [id]);
  console.log(cardData);
  return (
    <div>
      <div className="max-w-[1175px] mx-auto md:my-[100px]">
        <div className="grid grid-cols-3 o gap-10">
          {cardData.slice(0, 6).map((item) => {
            return (
              <div
                key={item._id}
                className=" mx-auto rounded-md shadow-md bg-gray-100 text-gray-800">
                <img
                  src={item.artImage}
                  alt=""
                  className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500"
                />
                <div className="flex flex-col justify-between p-6 space-y-8">
                  <div className="space-y-2">
                    <h2 className="text-3xl font-semibold tracking-wide">
                      {item.artName}
                    </h2>
                    <span className="inline-flex items-center gap-1 rounded-full bg-orange-200 px-2 py-1 text-xs font-semibold text-orange-600">
                      {item.subCatagory}
                    </span>
                    <p className="text-gray-800">
                      {item.description.slice(0, 150)}
                    </p>
                  </div>
                  <NavLink
                    to={`/artDetails/${item._id}`}
                    type="button"
                    className="btn flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-green-500 text-gray-50">
                    View Details
                  </NavLink>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SubCatagoryDetails;
