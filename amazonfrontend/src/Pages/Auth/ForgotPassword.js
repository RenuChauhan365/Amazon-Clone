// ForgotPassword.js
import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const ForgotPassword = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
    });
    // Implement logic for sending reset password link to the provided email
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        margin="normal"
        required
        fullWidth
        id="email"
        label="Email Address"
        name="email"
        autoComplete="email"
        autoFocus
      />
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        sx={{ mt: 3, mb: 2 }}
      >
        Reset Password
      </Button>
    </form>
  );
};

export default ForgotPassword;
