import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const SubCatagory = () => {
  let [catagory, setCatagory] = useState([]);
  useEffect(() => {
    fetch("https://artisan-avenue007.vercel.app/subcatagory")
      .then((res) => res.json())
      .then((data) => setCatagory(data));
  }, []);
  console.log(catagory);
  return (
    <div className="mt-10">
      <h1 className="text-center text-4xl font-extrabold">
        All Sub Categories
      </h1>
      <div className="grid mx-5 md:grid-cols-3 max-w-[1175px] md:mx-auto gap-10 mt-12">
        {catagory.map((item) => (
          <NavLink
            to={`/subCatagoryDetails/${item.catagory}`}
            key={item._id}
            className="card w-full bg-base-100 shadow-xl hover:text-green-600 hover:bg-green-200 cursor-pointer">
            <figure>
              <img className="h-[400px] w-full" src={item.image} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{item.catagory}</h2>
              <p>{item.description.slice(0, 200)}</p>
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default SubCatagory;
