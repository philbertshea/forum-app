import React, { useState } from "react";
import { TextField, Button, Container, Typography } from "@mui/material";

function Login() {
    const [username, setUsername] = useState("");

    const handleLogin = () => {
        console.log(`Logging in ${username}`)
    }

    return (
        <Container maxWidth="sm">
            <Typography variant="h4" component="h1" gutterBottom>
                Log in
            </Typography>
            <TextField fullWidth label="username" value={username} onChange={(e) => setUsername(e.target.value)} />
            <Button fullWidth color="primary" onClick={handleLogin}>Log In</Button>
        </Container>
    )
}

export default Login;