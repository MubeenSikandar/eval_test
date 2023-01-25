import React, {useState} from 'react'
import { Avatar, Button, Paper, Grid, Typography, Container, TextField } from "@mui/material"
import styled from './AuthStyles'
import { useDispatch } from 'react-redux';
import { signin, signup } from "../../action/Auth"
import { GoogleLogin } from '@react-oauth/google';
import { AUTH } from "../../constants/ActionTypes"
import { useNavigate} from 'react-router-dom';
import { LockOutlined } from '@mui/icons-material';
import Input from './Input';
import Icon from "./Icon"
import "./Auth.css"

const initialState = { firstName: '', lastName: '', email: '', password: '', confirmPassword: '' };


const Auth = () => {
    const classes = styled;

    const [showPassword, setShowPassword] = useState(false);

    const handleShowPassword = () => setShowPassword ((prevShowPassword) => !prevShowPassword )

    const [isSignup, setIsSignUp] = useState(false)

    const [form, setForm] = useState(initialState);

    const dispatch = useDispatch();

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
    
        if (isSignup) {
          dispatch(signup(form, navigate));
        } else {
          dispatch(signin(form, navigate));
        }
      };

    const handleChange = (e) => setForm({
        ...form, [e.target.name]: e.target.value
    });

    const googleSuccess = async (res) => {
        const result = res?.profileObj;
        const token = res?.tokenId;
    
        try {
            dispatch({ type: AUTH, data: { result, token } });
            navigate('/Home');
        } catch (error) {
          console.log(error);
        }
      };
    
    const googleFailure = () => {
    console.log("Google sign is unsuccessfull")
}

    const switchMode = () => {
        setIsSignUp((prevIsSignup) => !prevIsSignup)
        handleShowPassword(false);
    }


  return (
      <Container component="main" maxWidth="xs">
          <div className='Paper'>
          <Paper className={classes.paper} elevation={3}>
          <div className='Icon'>
              <Avatar className={classes.avatar}>
                  
                      <LockOutlined />  
                  </Avatar>
                  
                  <div className="TypoGraphy">
              <Typography variant="h5">
                  {isSignup ? "Sign Up" : "Sign In"}
                      <form className={classes.form} onSubmit={handleSubmit}>
                          <div className='Grid'>
                      <Grid container spacing={2}>
                          {
                              isSignup && (
                                  <>
                                      <Grid xs={6}>
                                      <TextField
                                          name="First Name"
                                          label="First Name"
                                              handleChange={handleChange}
                                          half/>
                                      </Grid>
                                      <Grid xs={6}>
                                      <TextField
                                          name="Last Name"
                                          label="Last Name"
                                              handleChange={handleChange}
                                          half/>
                                          </Grid>
                                      </>
                                          
                                  
                              )
                          }
                          <Input name="email" label="Email Address" handleChange={handleChange} type="email" />
                          <Input name="password" label="Password" handleChange={handleChange} type={showPassword ? "text" : "password"} handleShowPassword={handleShowPassword} />
                          {isSignup && <Input name="confirmPassword"
                              label="Repeat Password" handleChange={handleChange} type="password"/>}
                                      </Grid>                 
                              </div>
                      <Button type="submit" fullWidth variant='contained' color="primary">
                          {isSignup ? "Sign Up" : "Sign In"}
                                  </Button>
                                  <GoogleLogin clientId="372149628838-omp5ak6jjkk7f796db5ef0lbk8vep4df.apps.googleusercontent.com"
                                      render={(renderProps) => (
                                        <Button
                                            className={classes.googleButton}
                                            color="primary" fullWidth
                                              onClick={renderProps.onClick}
                                            disabled={renderProps.disabled}
                                            startIcon={<Icon />}
                                              variant="contained" 
                                          >
                                                  Google Sign In
                                              </Button>
                                      )} 
                                      onSuccess={googleSuccess}
                                      onError={googleFailure}
                                      cookiePolicy="single_host_origin"
                                      />
                                  <Grid container justify="flex-end">
                                      <Grid item>
                                          <Button onClick={switchMode}>
                                              {isSignup ? "Already Have an account? Sign In" : "Don't have an account? Sign Up"}
                                          </Button>
                                      </Grid>
                                  </Grid>
                  </form>
                          </Typography>
                      </div>
                      </div>
              </Paper>
              </div>
      </Container>
  )
}

export default Auth

