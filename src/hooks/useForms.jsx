import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchActivationCode } from "../redux/activationCodeSlice";
import { useNavigate } from "react-router-dom";
import { closeModal, submitEmployeeData } from "../redux/task3Slice";
import { toast } from "react-toastify";

export const useForms = () => {
  const { activationCode } = useSelector((state) => state.activationCodeSlice);
  const { modalOpen } = useSelector((state) => state.task3Slice);

  const dispatch = useDispatch();
  useEffect(() => {
    if (!activationCode) {
      dispatch(fetchActivationCode());
    }
  }, [activationCode, dispatch]);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    latitude: "",
    longitude: "",
    employeeID: "",
    city: "",
    country: "",
    activationCode: activationCode?.activationCode,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      latitude: "",
      longitude: "",
      employeeID: "",
      city: "",
      country: "",
      activationCode: activationCode?.activationCode,
    });

    console.log(formData);
    dispatch(submitEmployeeData(formData));
    dispatch(closeModal());
    toast.success("Employee Added Sucessfully");
  };

  return {
    formData,
    handleChange,
    setFormData,
    handleSubmit,
    modalOpen,
  };
};
