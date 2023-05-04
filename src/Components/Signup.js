import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}
const theme = createTheme();
export default function SignUp(props) {
    const [resume,setResume] = useState("")
    const location = useLocation()
    
    const [credentials, setCredetials] = useState({ name: "", email: "", password: "", cpassword: "" })
    
    function covertToBase64(e) {
        console.log(e);
        var reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.onload = () => {
            console.log(reader.result); //base64encoded string  
            setResume(reader.result);
        };
        reader.onerror = error => {
            console.log("Error: ", error);
        };
    }
    let history = useNavigate();

    const handleSubmit = async (e) => {
        const { name, email, password } = credentials;
        e.preventDefault();

        const response = await fetch("/api/auth/createuser"
            , {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'

                },
                body: JSON.stringify({ name, email, password ,resume })
            });
        const json = await response.json()
        console.log(json)
        if (json.success) {
            localStorage.setItem('token', json.authtoken);
            localStorage.setItem('resume', json.resume);
            history("/")
            props.showAlert("Account created successfully", "success")
        }
        else {
            props.showAlert("User Already Exists", "danger")
        }
        console.log(location.pathname);
    }

    const onChange = (e) => {
        if (e.target.name === 'resume') {
            setCredetials({ ...credentials, resume: resume });
        } else {
            setCredetials({ ...credentials, [e.target.name]: e.target.value });
        }
    }


    // React.useEffect(()=>{
    //     if(localStorage.getItem("uid")){
    //     setA(false)}
    // })

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign up
                    </Typography>
                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                        <Grid container spacing={1}>
                            <Grid item xs={12}>
                                <TextField
                                    autoComplete="given-name"
                                    name="name"
                                    required
                                    fullWidth
                                    id="name"
                                    label="Name"
                                    autoFocus
                                    onChange={onChange}
                                />
                            </Grid>

                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                    onChange={onChange}
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
                                    onChange={onChange}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="cpassword"
                                    label="Confirm Password"
                                    type="password"
                                    id="cpassword"
                                    autoComplete="new-password"
                                    onChange={onChange}
                                />

                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                fullWidth
                                    accept="file"
                                    type="file"
                                    name="resume"
                                    onChange={covertToBase64}
                                />
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Sign Up
                        </Button>
                        <Grid container justifyContent="flex-end">
                            <Grid item>
                                <Button variant="outlined" onClick={(e) => { history("/login") }}>Log In</Button>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
                <Copyright sx={{ mt: 5 }} />
            </Container>
        </ThemeProvider>
    );
}