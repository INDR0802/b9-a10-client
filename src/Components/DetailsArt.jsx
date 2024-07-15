import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const DetailsArt = () => {
  const { id } = useParams();
  let [art, setArt] = useState([]);

  const handelDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        console.log(id);
        fetch(`https://artisan-avenue007.vercel.app/art/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your Art has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  };

  useEffect(() => {
    fetch(`https://artisan-avenue007.vercel.app/art/${id}`)
      .then((res) => res.json())
      .then((data) => setArt(data));
  }, [id]);
  return (
    <div className="max-w-[1200px] flex flex-col items-center lg:flex-row mx-auto  my-10 gap-10">
      <img src={art.artImage} alt="" className="h-[500px] w-[300px] flex-1" />
      <div className="flex-1 space-y-3 mx-5">
        <h1 className="text-4xl font-extrabold">{art.artName}</h1>
        <h1 className="text-xl font-bold">Uploaded By: {art.userName}</h1>
        <h1 className="border-t-[1.5px] border-b-[1.5px] border-black py-2 font-bold">
          Rating: <span className="text-2xl">{art.rating}</span>
        </h1>
        <p className="text-md">
          <span className="font-extrabold">Short Description:</span>{" "}
          {art.description}
        </p>
        <div className="flex gap-2 items-center">
          <button className="bg-green-200 border-[1px] border-green-500 px-5 py-1 my-2 rounded-md text-green-600">
            {art.subCatagory}
          </button>
        </div>
        <div className="border-t-[1.5px] border-black py-2 space-y-1">
          <h1>
            Price: <span className="font-bold">{art.price}</span>
          </h1>
          <h1>
            Processing Time:{" "}
            <span className="font-bold">{art.processingTime}</span>
          </h1>
          <h1>
            Stock:
            {art.stock === "In Stock" ? (
              <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-200 text-green-800">
                {art.stock}
              </span>
            ) : (
              <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-200 text-red-800">
                {art.stock}
              </span>
            )}
          </h1>
        </div>
        <div className="flex gap-5">
          <NavLink
            to={`/updateart/${id}`}
            className="bg-green-200 border-[1px] border-green-500 px-5 py-1 my-2 rounded-md text-green-600">
            Update
          </NavLink>
          <button
            onClick={() => handelDelete(id)}
            className="bg-red-200 border-[1px] border-red-500 px-5 py-1 my-2 rounded-md text-red-600">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailsArt;
