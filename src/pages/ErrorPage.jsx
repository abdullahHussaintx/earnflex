import { Link } from "react-router-dom";

export const ErrorPage = () => {
  return (
    <div className=" h-screen w-screen flex-col gap-5  font-semibold text-5xl bg-slate-400 flex items-center justify-center">
      <h1 className=" text-red-500 ">Route Not Found</h1>
      <Link to="/" className=" text-white">
        Return To Home
      </Link>
    </div>
  );
};
