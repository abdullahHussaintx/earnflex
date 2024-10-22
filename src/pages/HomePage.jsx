import { useDispatch, useSelector } from "react-redux";
import { Loader } from "../components/Loader";
import { useEffect } from "react";
import { fetchActivationCode } from "../redux/activationCodeSlice";
import { details, notes } from "../utils/data";

export const HomePage = () => {
  const { loading, error, activationCode } = useSelector(
    (state) => state.activationCodeSlice
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchActivationCode());
  }, [dispatch]);

  if (loading) {
    return <Loader className="flex w-full items-center justify-center " />;
  }

  if (error) {
    return <p>Error Fetching Activation Code</p>;
  }

  return (
    <div className=" flex  flex-col gap-2  ">
      <p className=" text-2xl underline ">
        Activation Code Fetched Sucessfully
      </p>
      <p className=" text-xl">Please navigate to Tasks</p>
      <p className=" font-semibold text-lg">Project Details : </p>

      <p className=" font-semibold text-lg">Technologies used : </p>
      <ul>
        {details.map((item) => (
          <li className=" list-inside list-disc" key={item.id}>
            {item.title}
          </li>
        ))}
      </ul>
      <p className=" font-semibold text-lg">Notes</p>
      <ul>
        {notes.map((item) => (
          <li className=" list-inside list-disc" key={item.id}>
            {item.title}
          </li>
        ))}
      </ul>
    </div>
  );
};
