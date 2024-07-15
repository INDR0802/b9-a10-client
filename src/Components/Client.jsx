import { NavLink } from "react-router-dom";

const Client = () => {
  return (
    <section data-aos="flip-right" className="w-[95vw] max-w-[1175px] mx-auto my-16 bg-violet-600 rounded-lg p-10 md:px-12 flex flex-col md:flex-row justify-between items-center">
      <div className="max-w-[420px] space-y-5">
        <h2 className="text-white text-5xl font-extrabold">
          Meet Our Super
          <br />
          Clients
        </h2>
        <p className="text-white">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which dont look even slightly believable.
        </p>
        <NavLink to={"/clientReview"} className="btn btn-primary">Show All</NavLink>
      </div>

      <div className="relative">
        <div className="relative p-10 rounded-lg bg-white max-w-[430px] opacity-50 md:top-12 top-[70px] z-10">
          <img
            src="images/client.png"
            alt=""
            className="absolute -top-6 -left-5 rounded-full border-4 border-white"
          />
          <p className="font-light">
            We are providing the best and suitable home insurance services for
            the people who are interested to treatment
          </p>
          <h4 className="font-bold mt-5">Ilham Yuda</h4>
          <h6>Businessman</h6>
          <div className="flex justify-end">
            <img src="images/circles.png" alt="" />
          </div>
        </div>

        <div className="relative p-10 rounded-lg bg-white max-w-[430px] md:right-20 z-20">
          <img
            src="images/client.png"
            alt=""
            className="absolute -top-6 -left-5 rounded-full border-4 border-white"
          />
          <p className="font-light">
            We are providing the best and suitable home insurance services for
            the people who are interested to treatment
          </p>
          <h4 className="font-bold mt-5">Ilham Yuda</h4>
          <h6>Businessman</h6>
          <div className="flex justify-end">
            <img src="images/circles.png" alt="" />
          </div>
        </div>

        <div className="relative p-10 rounded-lg bg-white max-w-[430px] opacity-50 md:-top-12 -top-[70px] z-10">
          <img
            src="images/client.png"
            alt=""
            className="absolute -top-6 -left-5 rounded-full border-4 border-white"
          />
          <p className="font-light">
            We are providing the best and suitable home insurance services for
            the people who are interested to treatment
          </p>
          <h4 className="font-bold mt-5">Ilham Yuda</h4>
          <h6>Businessman</h6>
          <div className="flex justify-end">
            <img src="images/circles.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Client;
