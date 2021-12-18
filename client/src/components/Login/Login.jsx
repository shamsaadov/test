import React, { useState } from "react";
import {
  Avatar,
  Box,
  Button,
  CircularProgress,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { NavLink, useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { fetchLoginUser } from "../../redux/features/user.reducer";

const Login = () => {
  const dispatch = useDispatch();
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  const signIn = useSelector((state) => state.user.signIn);

  const handleLogin = (event) => {
    setLogin(event.target.value);
  };
  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleLoginUser = () => {
    dispatch(fetchLoginUser({ login, password }, history));
  };

  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: "url(https://source.unsplash.com/random)",
          backgroundRepeat: "no-repeat",
          backgroundColor: (t) =>
            t.palette.mode === "light"
              ? t.palette.grey[50]
              : t.palette.grey[900],
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Login
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              label="Login"
              name="login"
              onChange={handleLogin}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              onChange={handlePassword}
            />
            {signIn ? (
              <CircularProgress />
            ) : (
              <Button
                variant="contained"
                onClick={handleLoginUser}
                style={{ marginTop: 15 }}
              >
                Login
              </Button>
            )}
          </Box>
          <NavLink to={"/signup"}>
            If you don't have an account, click on me.
          </NavLink>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Login;

// ToDo поставить прелоадеры и использовать useHistory
