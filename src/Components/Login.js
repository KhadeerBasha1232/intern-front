import React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

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


export default function SignIn(props) {
    // const locate = useLocation()
    const [a,setA] = useState(false)
    const history = useNavigate();
    const [credentials, setCredetials] = useState({ email: "", password: "" })
    const handleSubmit = async (e) => {
        e.preventDefault();
        setA(true)
        const response = await fetch("/api/auth/login"
            , {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'

                },
                body: JSON.stringify({ email: credentials.email, password: credentials.password })
            });
        const json = await response.json()

        console.log(json)
        if (json.success) {
            localStorage.setItem('token', json.authtoken);
            localStorage.setItem("resume",json.resume)
            history("/")
            props.showAlert("Succesfully Logged In", "success")
        }
        else {
            props.showAlert("Invalid Credentials", "danger")
            history("/")
        }
        localStorage.setItem("email", credentials.email)
    }

    const onChange = (e) => {
        setCredetials({ ...credentials, [e.target.name]: e.target.value })
    }



    // useEffect(() => {
    //     if(l && locate.pathname==="/login"){
    //       document.body.style.opacity = 0.5;
    //     } else {
    //       document.body.style.opacity = 1;
    //     }
    //    }, [l,locate.pathname])
    return (
        <ThemeProvider theme={theme}
        // style={{
        //     filter: l ? "blur(20px)" : "none",
        // }}
        >
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
                        {/* <LockOutlinedIcon /> */}
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
                        <TextField
                            type={"email"}
                            margin="normal"
                            required/* eslint-disable */
                            inputProps={{ pattern: "[a-z0-9._%+-]+@[a-z]+.[a-z]{2,4}$" }}
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                            onChange={onChange}
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
                            onChange={onChange}
                        />
                        
                {/* {l?<Spinner className='mx-4' size="lg" style={{position: "fixed",backdropFilter: blur("8px"), top: "50%", left: "50%" }} animation="border" />:null} */}
                    
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                            disabled={a}
                            // onClick={handleLoad}
                        >
                            Sign In
                        </Button>
                        <Grid container>
                            <Grid item>
                                <Button variant="outlined" className="px-5" onClick={(e) => { history("/signup") }}>Sign Up</Button>
                            </Grid>
                            <Grid item style={{marginLeft:"auto"}}>
                                <Button variant="outlined" className='px-5'  onClick={(e) => { history("/") }}>Home</Button>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
                
                <Copyright sx={{ mt: 8, mb: 4 }} />
            </Container>
        </ThemeProvider>
    );

}