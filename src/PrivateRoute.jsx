import { useContext } from "react";
import { AuthContext } from "./firebase/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import { HashLoader } from "react-spinners";
import toast from "react-hot-toast";

const PrivateRoute = ({ children }) => {
  const context = useContext(AuthContext);
  const { user, loading } = context;
  const location = useLocation();

  if (loading) {
    return (
      <div className="border-2 flex justify-center items-center h-[50vh]">
        <HashLoader color="#36d7b7" />
      </div>
    );
  }

  if (user) {
    return children;
  }
  return (
    <>
      {toast.error("you must be logged in to access this page")}
      <Navigate to="/login" state={location?.pathname || "/"} />
    </>
  );
};

export default PrivateRoute;
