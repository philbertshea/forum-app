import React from "react";
import {Button} from "@mui/material";

function Home() {
    return (
        <div>
            <h1>Welcome to the forum!</h1>
            <Button variant="outlined" onClick={() => window.location.href = "/login"}>Log In</Button>
            <h3>If you do not have an account, register here.</h3>
            <Button variant="outlined" onClick={() => window.location.href = "/register"}>Register</Button>
        </div>
    );
}

export default Home;