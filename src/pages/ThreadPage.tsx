import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

interface Thread {

}

function ThreadPage() {
    const { id } = useParams<{ id: string }>()
    const [thread, setThread] = useState<Thread | null>(null);
    const [message, setMessage] = useState("");
    

    return <h1>
        Welcome to our page!
    </h1>;
}

export default ThreadPage;