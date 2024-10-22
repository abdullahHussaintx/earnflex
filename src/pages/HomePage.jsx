import { useDispatch, useSelector } from "react-redux";
import { Loader } from "../components/Loader";
import { useEffect } from "react";
import { fetchActivationCode } from "../redux/activationCodeSlice";

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
    <div className=" flex items-center flex-col gap-5 justify-center ">
      <p className=" text-2xl text-center">
        Activation Code Fetched Sucessfully
      </p>
      <p className=" text-xl">Please navigate to Tasks</p>
    </div>
  );
};
