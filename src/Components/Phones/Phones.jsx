import PhoneCard from "./PhoneCard";

export const Phones = ({ phones }) => {
  console.log(phones);
  return (
    <div>
      <h1 className="text-2xl text-center py-10 font-semibold">
        All Categories Phones
      </h1>
      <div
        className="grid grid-cols-1 md:grid-cols-2 
      lg:grid-cols-3 gap-10 py-10 px-5"
      >
        {phones?.map((phone) => (
          <PhoneCard key={phone.id} phone={phone}></PhoneCard>
        ))}
      </div>
    </div>
  );
};
