import { useLoaderData } from "react-router-dom";
import { Banner } from "../../Components/Header/Banner/Banner";
import { Phones } from "../../Components/Phones/Phones";

export const HomePage = () => {
  const phones = useLoaderData();
  console.log(phones.phones);

  return (
    <div>
      <Banner></Banner>
      <Phones></Phones>
    </div>
  );
};
