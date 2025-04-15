import { CardProject } from "../Components/CardProject";

export const Proyects = () => {
  return (
    <div className="container mx-auto mt-20">
      <div className=" grid grid-cols-1 md:grid-cols-3 gap-6  justify-items-center p-6">
        <CardProject />
        <CardProject />
        <CardProject />
        <CardProject />
        <CardProject />
        <CardProject />
      </div>
    </div>
  );
};
