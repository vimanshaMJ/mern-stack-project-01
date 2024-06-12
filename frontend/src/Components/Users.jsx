import { useEffect, useState } from "react";
import UserForm from "./UserForm";
import UsersTable from "./UsersTable";
import { Box } from "@mui/material";
import Axios from "axios";

export default function Users() {
  const [users, setUsers] = useState([]); //should pass an array initially coz we set a arrau for users
  const [submitted, setSubmitted] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [selectedUser, setSelectedUser] = useState({});

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = () => {
    //call to API using axios
    Axios.get("http://localhost:3001/api/users") // the url which runs backend for getting users
      .then((response) => {
        // console.log(response.data.response);
        setUsers(response.data.response);
      })
      .catch((error) => {
        console.log("Axios error: ", error);
      });
  };

  const createUser = (data) => {
    setSubmitted(true);

    const payload = {
      id: data.id,
      name: data.name,
    };

    Axios.post("http://localhost:3001/api/createuser", payload)
      .then(() => {
        getUsers();
        setSubmitted(false);
        isEdit(false);
      })
      .catch((error) => {
        console.log("Axios error: ", error);
      });
  };

  const updateUser = (data) => {
    setSubmitted(true);

    const payload = {
      id: data.id,
      name: data.name,
    };

    Axios.post("http://localhost:3001/api/updateuser", payload)
      .then(() => {
        getUsers();
        setSubmitted(false);
        isEdit(false);
      })
      .catch((error) => {
        console.log("Axios error: ", error);
      });
  };

  return (
    <Box
      sx={{
        width: "calc(100% - 100px)",
        margin: "auto",
        marginTop: "100px",
      }}
    >
      {/* call createUser() function in userform */}
      <UserForm
        createUser={createUser}
        updateUser={updateUser}
        submitted={submitted}
        data={selectedUser}
        isEdit={isEdit}
      />
      <UsersTable
        rows={users}
        selectedUser={(data) => {
          setSelectedUser(data);
          setIsEdit(true);
        }}
      />
    </Box>
  );
}
