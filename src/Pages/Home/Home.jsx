import React, { useContext } from "react";
import Header from "../../components/Header/Header";
import Services from "../../components/Services/Services";
import { AuthContext } from "../../Providers/AuthProviders";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const { events } = useLoaderData();

  return (
    <div>
      <Header></Header>
      <div className="mt-20">
        <h2 className="border-b-4 border-purple-600 w-4/12 mx-auto text-center py-5 text-4xl font-extrabold">
          Services
        </h2>
        <div className="grid max-w-6xl mx-auto mt-10 gap-4 md:grid-cols-3 grid-cols-1">
          {events?.map((event) => (
            <Services key={event.id} event={event}></Services>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
