import React, { useState, useEffect } from "react";
import {ThreadCard} from "./ThreadCard.tsx";

interface Thread {
    ID: number;
    UserID: number;
    Title: string;
    Content: string;
}

function AllThreads() {
    
    const [threads, setThreads] = useState<Thread[]>([]);
    const [message, setMessage] = useState("");

    const handleAllThreads = async () => {
        try {
            const response = await fetch("http://localhost:8080/getThreads", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
            });
    
            if (response.ok) {
                const data : Thread[] = await response.json();
                setThreads(data);
                setMessage(`Got users successfully. ${data}`);
            } else {
                setMessage(`Failed to get users.`);
            }
    
        } catch (error) {
            console.error("Error :", error);
            setMessage(`An error occurred.`);
        }
    }

    // Use useEffect to call the function only once when the component mounts
    useEffect(() => {
    handleAllThreads();
    }, []); // Empty dependency array ensures this runs only once

    return (
        <ul>
            {threads.reverse().map((thread) =>
                <ThreadCard id={thread.ID} userId={thread.UserID}
                            title={thread.Title} content={thread.Content} />)}
        </ul>
    )
}

export default AllThreads;