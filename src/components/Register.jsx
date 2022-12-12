import React from "react";
import { useState } from "react";
import { registerUser } from "../api/auth";

export const RegisterForm = ({setToken}) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div>
            <form onSubmit = { async (event)=> {
                try {
                    event.preventDefault();
                    const token = await registerUser(username, password);
                    setToken(token)
                    localStorage.setItem("token", token);
                } catch (error) {
                    console.error(error);
                }
            }} >
                <label htmlFor="Username">Username</label>
                <input type="text" name="username" value={username} onChange={(event)=> setUsername(event.target.value)} />
                <label htmlFor="Password">Password</label>
                <input type="password" name="password" value={password} onChange={(event)=> setPassword(event.target.value)}/>
                <button type="submit">Register</button>
            </form>
        </div>
    )
}