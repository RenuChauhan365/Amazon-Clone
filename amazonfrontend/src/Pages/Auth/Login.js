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
import { useAuth } from "../../Context/Auth";

const defaultTheme = createTheme();

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [auth, setAuth] = useAuth();
  const [fieldErrors, setFieldErrors] = useState({});

  const navigate = useNavigate();

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    return password.length >= 6;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const errors = {};

    if (!validateEmail(email)) {
      errors.email = "Invalid email address";
    }

    if (!validatePassword(password)) {
      errors.password = "Password must be at least 6 characters long";
    }

    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      return;
    }

    const userData = {
      email: email,
      password: password,
    };

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API}/api/auth/login`,
        userData
      );

      if (response.data.success) {
        setAuth({
          ...auth,
          user: response.data.user,
          token: response.data.token,
        });
        console.log(response.data);

        localStorage.setItem("auth", JSON.stringify(response.data));
        console.log(auth);
        toast.success(response.data.message);
        navigate("/");
      } else {
        if (response.data.error) {
          toast.error(response.data.message);
        }

        if (response.data.errors) {
          const errorObj = {};
          response.data.errors.forEach((error) => {
            errorObj[error.field] = error.message;
          });
          setFieldErrors(errorObj);
        } else {
          setFieldErrors({});
          toast.error("Login failed");
        }
      }
    } catch (error) {
      // Handle network errors or other exceptions
      toast.error("Invalid credentials");
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 3,
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

          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
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
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onBlur={() => {
                if (!password) {
                  setFieldErrors((prevErrors) => ({
                    ...prevErrors,
                    password: "password is required.",
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

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, backgroundColor: "yellow", color: "black" }}
            >
              Continue
            </Button>
            <Grid container>
              <Grid item xs>
                <NavLink to="/auth/forgot-password" variant="body2">
                  Forgot password?
                </NavLink>
              </Grid>
              <Grid item>
                <NavLink to="/auth/register" variant="body2">
                  {"Don't have an account? Sign Up"}
                </NavLink>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
