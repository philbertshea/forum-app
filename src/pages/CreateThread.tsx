import React, { useState } from "react";
import { TextField, Button, Container, Typography } from "@mui/material";

function CreateThread() {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [message, setMessage] = useState("");
    const [count, setCount] = useState(0);
    const username = localStorage.getItem("username");

    // This is an Async Function because it waits for backend to return JSON result
    // Easier Way: Create a no-arg function, pass in global variables via useState
    const handleCreateThread = async () => {
        setCount(count + 1)
        try {
            const idresponse = await fetch("http://localhost:8080/getIdFromUsername", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ username })
            });

            if (!idresponse.ok) {
                setMessage(`Error: Could not find user. ${count}`);
                return;
            }

            const userid : number = await idresponse.json();
            console.log(userid)

            const response = await fetch("http://localhost:8080/createThread", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ userid, title, content })
            });

            if (response.ok) {
                setMessage(`Thread by ${userid} titled ${title} of content ${content} created successfully. ${count}`);

            } else if (response.status === 409) {
                setMessage(`User already exists. ${count}`);
            } else {
                setMessage(`Failed to create thread. ${count}`);
            }

        } catch (error) {
            console.error("Error :", error);
            setMessage(`An error occurred. ${count}`);
        }
    }

    return username ? (
        <Container maxWidth="sm">
            <h1>{message}</h1>
            <Typography variant="h4" component="h1" gutterBottom>
                Create New Thread
            </Typography>
            <TextField fullWidth placeholder="Title here..." label="title" value={title} onChange={(e) => setTitle(e.target.value)} />
            <br />
            <TextField fullWidth placeholder="Content here..." label="content" multiline rows={5} maxRows={10} onChange={(e) => setContent(e.target.value)} />
            <Button fullWidth color="primary" onClick={handleCreateThread}>Create New Thread</Button>
        </Container>
        ) :
        (
            <Container maxWidth="sm">
                <Typography variant="h4" component="h1" gutterBottom>
                    Sign in to create a thread.
                </Typography>
                <Button fullWidth color="primary" onClick={() => window.location.href = "/login"}>Log In</Button>
                <Button fullWidth color="secondary" onClick={() => window.location.href = "/register"}>Register</Button>
            </Container>
        )
}

export default CreateThread;