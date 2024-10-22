import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Loader } from "../components/Loader";
import { fetchActivationCode } from "../redux/activationCodeSlice";
import { fetchUsersData } from "../redux/task1Slice";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export const Task2 = () => {
  const dispatch = useDispatch();
  const { loading, error, data } = useSelector((state) => state.task1Slice);
  const { activationCode } = useSelector((state) => state.activationCodeSlice);

  useEffect(() => {
    if (!activationCode) {
      dispatch(fetchActivationCode());
    } else {
      dispatch(fetchUsersData());
    }
  }, [dispatch, activationCode]);

  if (loading) {
    return <Loader className="w-full flex items-center justify-center" />;
  }
  if (error) {
    return (
      <p className="text-red-500 text-lg text-center">
        Error Fetching Employees Data
      </p>
    );
  }

  return (
    <section className=" space-y-3">
      <p className=" font-semibold text-center">
        All Employees Locations on map
      </p>
      <MapContainer
        center={[20, 0]}
        zoom={3}
        style={{ height: "500px", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {data.map((employee) => {
          const latitude = parseFloat(employee.latitude);
          const longitude = parseFloat(employee.longitude);

          if (isNaN(latitude) || isNaN(longitude)) {
            console.warn(
              `Invalid coordinates for employee ID ${employee.employeeID}: ${employee.latitude}, ${employee.longitude}`
            );
            return null;
          }

          return (
            <Marker key={employee.employeeID} position={[latitude, longitude]}>
              <Popup>
                <strong>{`${employee.firstName} ${employee.lastName}`}</strong>
                <br />
                {employee.city}, {employee.country}
                <br />
                {employee.email}
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </section>
  );
};
