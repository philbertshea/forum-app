import React from "react";
import { Button, Container } from "@mui/material"

function Logout() {
    localStorage.setItem("username", "");
    return <Container>
        <h1>
            You have logged out successfully.
        </h1>
        <h3>To return to our main page, click here.</h3>
        <Button fullWidth color="secondary" onClick={() => window.location.href = "/"}>Home Page</Button>
        <h3>To log in, click here.</h3>
        <Button fullWidth color="primary" onClick={() => window.location.href = "/login"}>Log In</Button>
    </Container>
}

export default Logout;