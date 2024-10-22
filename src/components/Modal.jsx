import ReactDOM from "react-dom";
import { InputField } from "./InputField";
import { Button } from "./Button";
import { useEffect } from "react";
import { useForms } from "../hooks/useForms";

export const Modal = ({ onClose, className }) => {
  const { formData, setFormData, handleChange, handleSubmit } = useForms();

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  useEffect(() => {
    const getUserLocation = () => {
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            setFormData((prevData) => ({
              ...prevData,
              latitude: latitude.toFixed(6),
              longitude: longitude.toFixed(6),
            }));
          },
          (error) => {
            console.error("Error getting location:", error.message);
          }
        );
      } else {
        console.error("Geolocation is not supported by this browser.");
      }
    };

    getUserLocation();
  }, []);

  return ReactDOM.createPortal(
    <div
      className="fixed inset-0  bg-black bg-opacity-30   p-3 flex items-center justify-center z-40"
      onClick={handleOverlayClick}
    >
      <div
        className={`bg-white rounded-xl p-3  w-full  h-[75%] lg:w-auto lg:h-auto  overflow-y-auto ${className}`}
      >
        <div className="  flex-1 p-5 space-y-5">
          <p className=" underline font-semibold text-2xl text-center">
            Please Fill the Form
          </p>
          <p className="  text-sm text-center">
            NOTE: Please allow location access in order to submit form
          </p>
          <form
            onSubmit={handleSubmit}
            className=" grid grid-cols-1 lg:grid-cols-2 gap-5 justify-items-center"
          >
            <InputField
              placeholder="First Name"
              label="First Name"
              type="text"
              name="firstName"
              required
              onChange={handleChange}
            />
            <InputField
              placeholder="Last Name"
              label="Last Name"
              type="text"
              name="lastName"
              required
              onChange={handleChange}
            />
            <InputField
              placeholder="Email"
              label="Email"
              type="email"
              name="email"
              required
              onChange={handleChange}
            />
            <InputField
              placeholder="Phone Number"
              label="Phone Number"
              type="number"
              name="phoneNumber"
              required
              onChange={handleChange}
            />
            <InputField
              placeholder="Latitude"
              label="Latitude"
              required
              readOnly
              value={formData.latitude}
              type="number"
            />
            <InputField
              placeholder="Longitude"
              label="Longitude"
              required
              readOnly
              value={formData.longitude}
              type="number"
            />
            <InputField
              placeholder="Employee ID"
              label="Employee ID"
              type="text"
              name="employeeID"
              required
              onChange={handleChange}
            />
            <InputField
              placeholder="City"
              label="City"
              name="city"
              type="text"
              required
              onChange={handleChange}
            />
            <InputField
              placeholder="Country"
              label="Country"
              type="text"
              name="country"
              required
              onChange={handleChange}
            />
            <Button title="Submit" type="submit" />
          </form>
        </div>
      </div>
    </div>,
    document.body
  );
};
