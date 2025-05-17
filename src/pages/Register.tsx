import React, { useState } from "react";
import { TextField, Button, Container, Typography } from "@mui/material";

function Register() {
    const [username, setUsername] = useState("");
    const [message, setMessage] = useState("");
    const [count, setCount] = useState(0);

    // This is an Async Function because it waits for backend to return JSON result
    // Easier Way: Create a no-arg function, pass in global variables via useState
    const handleRegister = async () => {
        setCount(count + 1)
        try {
            const response = await fetch("http://localhost:8080/registerUser", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ username })
            });

            if (response.ok) {
                setMessage(`User ${ username } registered successfully. ${count}`);
            } else if (response.status === 409) {
                setMessage(`User already exists. ${count}`);
            } else {
                setMessage(`Failed to register user. ${count}`);
            }

        } catch (error) {
            console.error("Error :", error);
            setMessage(`An error occurred. ${count}`);
        }
    }

    return (
        <Container maxWidth="sm">
            <Typography variant="h4" component="h1" gutterBottom>
                Register
            </Typography>
            <TextField fullWidth label="username" value={username} onChange={(e) => setUsername(e.target.value)} />
            <Button fullWidth color="primary" onClick={handleRegister}>Register</Button>
            <h3 style={{color: "red"}}>{message}</h3>
        </Container>
    );
}

export default Register;