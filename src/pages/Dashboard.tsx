import React from "react";
import { Button, Container } from "@mui/material";
import AllThreads from "./AllThreads.tsx"

const goLogin = () => {
    window.location.href = "/login"
}

const goRegister = () => {
    window.location.href = "/register"
}

function Dashboard() {
    const username = localStorage.getItem("username");

    return <Container maxWidth="sm">
        {username ? (
            <>
                <h1>Welcome to the forum, {username}</h1>
                <Button fullWidth onClick={() => window.location.href = "/create_thread"}>Create Thread</Button>
                <Button fullWidth onClick={() => window.location.href = "/logout"}>Log Out</Button>
                <AllThreads />
            </>
            
        ) : (
            <>
                <h1>Please log in first.</h1>
                <Button onClick={goLogin}>Log In</Button>
                <h3>If you do not have an account, register here.</h3>
                <Button onClick={goRegister}>Register</Button>
            </>
        )}
    </Container>
}

export default Dashboard;