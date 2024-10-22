import { useEffect, useState } from "react";
import { fetchUsersData } from "../redux/task1Slice";
import { useDispatch, useSelector } from "react-redux";
import { Loader } from "../components/Loader";
import { fetchActivationCode } from "../redux/activationCodeSlice";
import DataTable from "react-data-table-component";
import { InputField } from "../components/InputField";

export const Task1 = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.task1Slice);
  const { activationCode } = useSelector((state) => state.activationCodeSlice);

  const [searchText, setSearchText] = useState("");

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

  const columns = [
    {
      name: "First Name",
      selector: (row) => row.firstName,
      sortable: true,
    },
    {
      name: "Last Name",
      selector: (row) => row.lastName,
      sortable: true,
    },
    {
      name: "Email",
      selector: (row) => row.email,
      sortable: true,
    },
    {
      name: "Employee ID",
      selector: (row) => row.employeeID,
      sortable: true,
    },
    {
      name: "City",
      selector: (row) => row.city,
      sortable: true,
    },
    {
      name: "Country",
      selector: (row) => row.country,
      sortable: true,
    },
    {
      name: "Phone Number",
      selector: (row) => row.phoneNumber,
      sortable: true,
    },
    {
      name: "Created At",
      selector: (row) => new Date(row.createdAt).toLocaleString(),
      sortable: true,
    },
  ];

  const filteredData = data.filter((item) =>
    Object.values(item).some((val) =>
      String(val).toLowerCase().includes(searchText.toLowerCase())
    )
  );

  return (
    <div className=" space-y-3">
      <p className=" text-center font-semibold text-xl">Employee Data Table</p>
      <div className="flex justify-end">
        <InputField
          placeholder="Search...."
          value={searchText}
          type="text"
          onChange={(e) => setSearchText(e.target.value)}
        />
      </div>
      <DataTable columns={columns} data={filteredData} pagination striped />
    </div>
  );
};
