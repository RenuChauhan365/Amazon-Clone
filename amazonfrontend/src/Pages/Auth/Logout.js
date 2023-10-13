import React from "react";
import {
  Modal,
  Typography,
  Button,
  Box
} from "@mui/material";
import { styled } from "@mui/material/styles";

const ModalContent = styled("div")({
  backgroundColor: theme => theme.palette.background.paper,
  boxShadow: theme => theme.shadows[5],
  padding: theme => theme.spacing(4),
  textAlign: "center",
  outline: "none",
  borderRadius: 8,
});

const Logout = ({ open, handleClose, handleLogout, updateUserStatus }) => {
  const handleLogoutClick = () => {
    handleLogout(); // Call the handleLogout function to log out the user
    updateUserStatus(false); // Update user authentication status to false (logged out)
    handleClose(); // Close the modal after successful logout
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <ModalContent>
        <Typography variant="h6">Are you sure you want to logout?</Typography>
        <Box mt={2}>
          <Button variant="contained" color="primary" onClick={handleLogoutClick}>
            Logout
          </Button>
        </Box>
      </ModalContent>
    </Modal>
  );
};

export default Logout;
