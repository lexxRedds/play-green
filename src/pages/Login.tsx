import styled from 'styled-components';

import { useState, FormEvent } from "react";
import { useNavigate } from 'react-router-dom';

import SignIn from '../components/SignIn';

const Main = styled.main`
    font-size: 1rem;
`;

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();
  
    const handleForm = async (event: FormEvent) => {
        event.preventDefault();        

        const error = await SignIn(email, password);

        if (error) {
            console.log('first ERROR')
            return console.log(error)
        }

        return navigate('/home');
    }

    return (
        <Main>WELCOME
            <form onSubmit={handleForm}>
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Log in</button>
            </form>
        </Main>
    );
}