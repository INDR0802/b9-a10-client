import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../firebase/AuthProvider";
import Swal from "sweetalert2";

const UpdateArt = () => {
  const { id } = useParams();
  let context = useContext(AuthContext);
  let { user } = context;
  console.log(user);

  let [art, setArt] = useState([]);

  const [subCatagory, setSubCatagory] = useState("");
  const [customized, setCustomized] = useState("");
  const [stock, setStock] = useState("");

  const handleSubCatagory = (e) => {
    setSubCatagory(e.target.value);
  };

  const handleCustomized = (e) => {
    setCustomized(e.target.value);
  };

  const handleStock = (e) => {
    setStock(e.target.value);
  };

  const handleUpdate = (event) => {
    event.preventDefault();
    const artImage = event.target.artImage.value;
    const artName = event.target.artName.value;
    const description = event.target.description.value;
    const price = event.target.price.value;
    const rating = event.target.rating.value;
    const processingTime = event.target.processingTime.value;
    const userName = event.target.userName.value;
    const userEmail = event.target.userEmail.value;

    const updatedArt = {
      artImage,
      artName,
      subCatagory,
      description,
      price,
      rating,
      customized,
      processingTime,
      stock,
      userName,
      userEmail,
    };
    fetch(`https://artisan-avenue007.vercel.app/art/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedArt),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data?.modifiedCount > 0) {
          Swal.fire({
            title: "Updated!",
            text: "Art Updated Successfully",
            icon: "success",
          });
        }
      });
  };

  useEffect(() => {
    fetch(`https://artisan-avenue007.vercel.app/art/${id}`)
      .then((res) => res.json())
      .then((data) => setArt(data));
  }, [id]);
  let { artImage, artName, description, price, rating, processingTime } = art;
  return (
    <div>
      <div>
        <form
          onSubmit={handleUpdate}
          className="max-w-[500px]  mx-auto my-12 border-2 border-green-600 py-5 px-5 rounded-2xl bg-[url('/formBg.svg')] bg-cover">
          <div className="text-center text-2xl font-extrabold my-5">
            Update Art Data
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              defaultValue={artImage}
              type="text"
              name="artImage"
              className="block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-black appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="artImage"
              className="peer-focus:font-medium absolute text-md text-black dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Art Image
            </label>
          </div>
          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 w-full mb-5 group">
              <input
                defaultValue={artName}
                type="text"
                name="artName"
                className="block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-black appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="artName"
                className="peer-focus:font-medium absolute text-md text-black dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Art Name
              </label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <select
                onChange={handleSubCatagory}
                className="select select-primary w-full max-w-xs bg-transparent text-md font-bold">
                <option disabled selected>
                  Subcatagory
                </option>
                <option>Landscape Painting</option>
                <option> Portrait Drawing</option>
                <option>Watercolour Painting</option>
                <option>Oil Painting</option>
                <option>Charcoal Sketching</option>
                <option>Cartoon Drawing</option>
              </select>
            </div>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              defaultValue={description}
              type="text"
              name="description"
              className="block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-black appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
            />
            <label
              htmlFor="description"
              className="peer-focus:font-medium absolute text-md text-black dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Short Description
            </label>
          </div>
          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 w-full mb-5 group">
              <input
                defaultValue={price}
                type="text"
                name="price"
                className="block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-black appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="price"
                className="peer-focus:font-medium absolute text-md text-black dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Price
              </label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <input
                defaultValue={rating}
                type="text"
                name="rating"
                className="block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-black appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
              />
              <label
                htmlFor="rating"
                className="peer-focus:font-medium absolute text-md text-black dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Rating
              </label>
            </div>
          </div>

          <div className="flex gap-5 text-md font-semibold mb-5">
            <select
              onChange={handleCustomized}
              className="select select-primary w-full max-w-xs bg-transparent text-md font-bold">
              <option disabled selected>
                Customized
              </option>
              <option>Yes</option>
              <option>No</option>
            </select>
          </div>

          <div className="flex justify-between">
            <div className="relative z-0  mb-5 group">
              <input
                defaultValue={processingTime}
                type="text"
                name="processingTime"
                className="block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-black appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
              />
              <label
                htmlFor="processingTime"
                className="peer-focus:font-medium absolute text-md text-black dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Processing Time
              </label>
            </div>

            <div className="flex gap-5 text-md font-semibold mb-5">
              <select
                onChange={handleStock}
                className="select select-primary w-full max-w-xs bg-transparent text-md font-bold">
                <option disabled selected>
                  Stock Status
                </option>
                <option>In Stock</option>
                <option>Made to Order</option>
              </select>
            </div>
          </div>

          <div className="grid md:grid-cols-2 md:gap-6 mt-2">
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="tel"
                defaultValue={user ? user.displayName : " "}
                name="userName"
                className="block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-black appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="userName"
                className="peer-focus:font-medium absolute text-md text-black dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                User Name
              </label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <input
                defaultValue={user ? user.email : " "}
                type="text"
                name="userEmail"
                className="block py-2.5 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-black appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="userEmail"
                className="peer-focus:font-medium absolute text-md text-black dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Email
              </label>
            </div>
          </div>
          <button
            type="submit"
            className="text-white bg-orange-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-md w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Update Art
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateArt;
