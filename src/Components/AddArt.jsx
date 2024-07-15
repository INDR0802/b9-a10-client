import { useContext, useState } from "react";
import { AuthContext } from "../firebase/AuthProvider";
import Swal from "sweetalert2";

const AddArt = () => {
  let context = useContext(AuthContext);
  let { user } = context;
  console.log(user);

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

  const handleSubmit = (event) => {
    event.preventDefault();
    const artImage = event.target.artImage.value;
    const artName = event.target.artName.value;
    const description = event.target.description.value;
    const price = event.target.price.value;
    const rating = event.target.rating.value;
    const processingTime = event.target.processingTime.value;
    const userName = event.target.userName.value;
    const userEmail = event.target.userEmail.value;

    const newArt = {
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

    fetch("https://artisan-avenue007.vercel.app/arts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newArt),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.insertedId) {
          Swal.fire({
            title: "Good job!",
            text: "You clicked the button!",
            icon: "success",
          });
        }
      });
  };
  return (
    <div className="mx-5">
      <form
        onSubmit={handleSubmit}
        className="max-w-[500px]  mx-auto my-12 border-2 border-green-600 py-5 px-5 rounded-2xl bg-[url('/formBg.svg')] bg-cover">
        <div className="text-center text-2xl font-extrabold my-5">
          Add a New Art to our Collection
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
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
              <option>Landscape_Painting</option>
              <option>Portrait_Drawing</option>
              <option>Watercolour_Painting</option>
              <option>Oil_Painting</option>
              <option>Charcoal_Sketching</option>
              <option>Cartoon_Drawing</option>
            </select>
          </div>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
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
              value={user ? user.displayName : " "}
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
              value={user ? user.email : " "}
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
          add Art
        </button>
      </form>
    </div>
  );
};

export default AddArt;
