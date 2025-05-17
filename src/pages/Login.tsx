import React, { useState } from "react";
import { TextField, Button, Container, Typography } from "@mui/material";

function Login() {
    const [username, setUsername] = useState("");
    const [message, setMessage] = useState("");
    const [count, setCount] = useState(0);

    const handleLogin = async () => {
        setCount(count + 1)
        try {
            const response = await fetch("http://localhost:8080/loginUser", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ username })
            });

            if (response.ok) {
                setMessage(`User ${ username } logged in successfully. ${count}`);

                // LocalStorage is the easiest way to store non-sensitive data
                // like username of a user, but it is less secure.
                // Future improvements include using cookies to store this data.
                localStorage.setItem("username", username);
                // Redirect to dashboard page.
                window.location.href = "/dashboard";

            } else if (response.status === 401) {
                setMessage(`User does not exist. ${count}`);
            } else {
                setMessage(`Failed to log in user. ${count}`);
            }

        } catch (error) {
            console.error("Error :", error);
            setMessage(`An error occurred. ${count}`);
        }
    }

    return (
        <Container maxWidth="sm">
            <Typography variant="h4" component="h1" gutterBottom>
                Log in
            </Typography>
            <TextField fullWidth label="username" value={username} onChange={(e) => setUsername(e.target.value)} />
            <Button fullWidth color="primary" onClick={handleLogin}>Log In</Button>
            <h3 style={{color: "red"}}>{message}</h3>
        </Container>
    )
}

export default Login;