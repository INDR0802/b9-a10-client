import ArtCard from "../Components/ArtCard";
import Banner from "../Components/Banner";
import Client from "../Components/Client";
import ContactUs from "../Components/ContactUs";
import Speciality from "../Components/Speciality";
import SubCatagory from "../Components/SubCatagory";

const Homepage = () => {
  return (
    <div>
      <Banner />
      <ArtCard />
      <SubCatagory />
      <Client />
      <Speciality />
      <ContactUs />
    </div>
  );
};

export default Homepage;
