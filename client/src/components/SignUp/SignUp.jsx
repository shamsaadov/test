import React, { useEffect, useState } from "react";
import {
  Avatar,
  Box,
  Button,
  CircularProgress,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { NavLink, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchSignUpUser } from "../../redux/features/user.reducer";

const SignUp = () => {
  const [name, setName] = useState("");
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const success = useSelector((state) => state.user.success);
  const signUp = useSelector((state) => state.user.signUp);
  const history = useHistory();

  const dispatch = useDispatch();

  const handleSetName = (event) => {
    setName(event.target.value);
  };

  const handleSetLogin = (event) => {
    setLogin(event.target.value);
  };

  const handleSetPassword = (event) => {
    setPassword(event.target.value);
  };

  const handleSignUpUser = () => {
    dispatch(fetchSignUpUser({ name, login, password }, history));
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <Box component="form" noValidate sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                onChange={handleSetName}
                required
                fullWidth
                label="Name"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                onChange={handleSetLogin}
                required
                fullWidth
                label="Login"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                label="Password"
                onChange={handleSetPassword}
                type="password"
              />
            </Grid>
          </Grid>
          {signUp ? (
            <CircularProgress />
          ) : (
            <Button
              onClick={handleSignUpUser}
              fullWidth
              variant="contained"
              style={{ marginTop: 15 }}
            >
              Sign Up
            </Button>
          )}
        </Box>
        <NavLink to={"/login"}>
          If you are already registered, click on me
        </NavLink>
      </Box>
    </Container>
  );
};

export default SignUp;
