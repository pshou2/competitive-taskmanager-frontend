"use client"

import { useState } from "react"

export default function Page() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async (event: React.SubmitEvent<HTMLFormElement>) => {
        event.preventDefault();

        try {
            const response = await fetch(`http://localhost:5000/api/auth/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email: email, password: password }),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();
            console.log('Success:', data);
        } catch (error) {
            console.error('Error sending POST request:', error);
        }
    };
    
    return (
        <form onSubmit={handleLogin}>
            <label htmlFor="email">Email: </label>
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="password">Password: </label>
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Login</button>
        </form>
    );
}