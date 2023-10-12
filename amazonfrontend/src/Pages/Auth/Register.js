import React ,{useState} from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
const defaultTheme = createTheme();

export default function Register() {


  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [lastName, setLastName] = useState("");
  const [profilePicture, setProfilePicture] = useState("");
  //const [role, setRole] = useState("");


	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const formData = new FormData();
			formData.append('firstName', firstName);
			formData.append('lastName', lastName);
			formData.append('email', email);
			formData.append('password', password);
			//formData.append('role', role);
			formData.append('profilePicture', profilePicture);

			const response = await axios.post(`${process.env.REACT_APP_API}/api/auth/register`, formData, {
				headers: {
					'Content-Type': 'multipart/form-data'
				}
			});

			if (response.data.success) {
				toast.success(response.data.message);
				//navigate('/login')
			} else {
				toast.error(response.data.message);
			}
		} catch (error) {
			console.error(error);
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

                />

              </Grid>

							<Grid>
								<br />
							<input type="file"  onChange={(e) => setProfilePicture(e.target.files[0])} accept="image/*" />
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
                <NavLink to="/login" variant="body2">
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
