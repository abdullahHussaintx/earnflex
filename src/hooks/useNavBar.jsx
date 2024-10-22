import { useDispatch, useSelector } from "react-redux";
import { handleNavBar } from "../redux/navBarSlice";
import { useEffect } from "react";

export const useNavBar = () => {
  const dispatch = useDispatch();
  const { navOpen } = useSelector((state) => state.navBarSlice);

  const handleClick = () => {
    dispatch(handleNavBar());
  };

  useEffect(() => {
    if (navOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [navOpen]);

  return { navOpen, handleClick };
};
