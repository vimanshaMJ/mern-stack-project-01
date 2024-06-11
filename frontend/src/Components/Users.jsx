import UserForm from "./UserForm";
import React from "react";
import UsersTable from "./UsersTable";
import { Box } from "@mui/material";

export default function Users() {
  const users = [
    { id: 1, name: "Vimansha" },
    { id: 2, name: "Gihan" },
    { id: 3, name: "ABCDE" },
  ];

  return (
    <Box
      sx={{
        width: "calc(100% - 100px)",
        margin: "auto",
        marginTop: "100px",
      }}
    >
      <UserForm />
      <UsersTable rows={users} />
    </Box>
  );
}
