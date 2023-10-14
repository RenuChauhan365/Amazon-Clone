import React, { useState } from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
const defaultTheme = createTheme();

export default function Register() {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [lastName, setLastName] = useState("");
  const [fieldErrors, setFieldErrors] = useState({});

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userData = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
      };

      const response = await axios.post(
        `${process.env.REACT_APP_API}/api/auth/register`,
        userData
      );

      console.log(response.data);

      if (response.data.success) {
        toast.success(" Registration Successful, please verify your email.");
        navigate("/login");
      } else {
        if (response.data.errors) {
          const errorObj = {};
          response.data.errors.forEach((error) => {
            errorObj[error.field] = error.message;
          });
          setFieldErrors(errorObj);
        } else {
          setFieldErrors({});
          toast.error("Registration failed");
        }
      }
    } catch (error) {
      console.error(error);
      toast.error("Invalid Details");

    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <NavLink
            to="/"
            style={{
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
            }}
          >
            <img
              src="https://i0.wp.com/www.columbia-pike.org/wp-content/uploads/2021/12/amazon-logo-vector-png-vector-png-free-amazon-logos-705-1.jpeg?ssl=1"
              alt="photo"
              style={{ width: "100px", height: "auto" }}
            />
            <span style={{ marginLeft: "0%", color: "black" }}>.In</span>
          </NavLink>

          <Typography component="h1" variant="h5" style={{ textAlign: "left" }}>
            Create Account
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  onBlur={() => {
                    if (!firstName) {
                      setFieldErrors((prevErrors) => ({
                        ...prevErrors,
                        firstName: "First Name is required.",
                      }));
                    } else {
                      setFieldErrors((prevErrors) => ({
                        ...prevErrors,
                        firstName: undefined,
                      }));
                    }
                  }}
                  error={fieldErrors.firstName !== undefined}
                  helperText={fieldErrors.firstName}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  onBlur={() => {
                    if (!lastName) {
                      setFieldErrors((prevErrors) => ({
                        ...prevErrors,
                        lastName: "Last Name is required.",
                      }));
                    } else {
                      setFieldErrors((prevErrors) => ({
                        ...prevErrors,
                        lastName: undefined,
                      }));
                    }
                  }}
                  error={fieldErrors.lastName !== undefined}
                  helperText={fieldErrors.lastName}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email"
                  name="email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}

                  onBlur={() => {
                    if (!email) {
                      setFieldErrors((prevErrors) => ({
                        ...prevErrors,
                        email: "Email is required.",
                      }));
                    } else {
                      setFieldErrors((prevErrors) => ({
                        ...prevErrors,
                        email: undefined,
                      }));
                    }
                  }}

                  error={fieldErrors.email !== undefined}
                  helperText={fieldErrors.email}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}

                  onBlur={() => {
                    if (!password) {
                      setFieldErrors((prevErrors) => ({
                        ...prevErrors,
                        password: "Password is required.",
                      }));
                    } else {
                      setFieldErrors((prevErrors) => ({
                        ...prevErrors,
                        password: undefined,
                      }));
                    }
                  }}

                  error={fieldErrors.password !== undefined}
                  helperText={fieldErrors.password}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, backgroundColor: "yellow", color: "black" }}
            >
              Continue
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <NavLink to="/auth/login" variant="body2">
                  Already have an account? Sign in
                </NavLink>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
