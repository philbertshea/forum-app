import React, { useEffect, useState } from "react";
import { Button, Container, Typography } from "@mui/material";

interface User {
    ID: number;
    Username: string;
}

function AllUsers() {
    const [message, setMessage] = useState("");
    const [count, setCount] = useState(0);
    const [users, setUsers] = useState<User[]>([])

    // This is an Async Function because it waits for backend to return JSON result
    // Easier Way: Create a no-arg function, pass in global variables via useState
    const handleAllUsers = async () => {
        setCount(count + 1)
        try {
            const response = await fetch("http://localhost:8080/getUsers", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (response.ok) {
                const data : User[] = await response.json();
                setUsers(data)
                setMessage(`Got users successfully. ${data}`);
            } else {
                setMessage(`Failed to get users. ${count}`);
            }

        } catch (error) {
            console.error("Error :", error);
            setMessage(`An error occurred. ${count}`);
        }
    }

    return (
        <Container maxWidth="sm">
            <h1>{message}</h1>
            <Typography variant="h4" component="h1" gutterBottom>
                Get All Users
            </Typography>
            <Button fullWidth color="primary" onClick={handleAllUsers}>Get All Users</Button>
            <br />
            <h1>All Users</h1>
            <ul>
                {users.map((user) => (
                    <li>{user.ID} - {user.Username}</li>
                ))}
            </ul>
        </Container>
    );
}

export default AllUsers;