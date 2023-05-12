import styled from 'styled-components';

import { useState, FormEvent } from "react";
import { useNavigate, Link } from 'react-router-dom';

import SignIn from '../components/SignIn';

const Main = styled.main`
    width: 100%;
    height: 100vh;
    background: #E5E5E5;
    text-align: center;
    color: #232232;
`;

const Form = styled.form`
    height: 100%;
    margin: 0 auto;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Title = styled.h1`
    font-size: 42px;
    line-height: 51.25px;
    margin: 0;
`;

const Welcome = styled.span`
    margin: 7px 0;
    width: 85%;
    font-size: 1rem;
    color: #333242;
`;

const InputGroup = styled.fieldset`
    position: relative;
    width: 100%;
    border: none;
`;

const Input = styled.input`
    box-sizing: border-box;
    width: 100%;
    height: 67px;
    margin: 10px 0;
    padding: 16px;
    border: none;
    border-radius: 18px;
    font-size: 18px;
    font-weight: 400;
    transition: all .4s ease;

    &:not(:placeholder-shown)  {
        padding-top: 26px;
        padding-bottom: 0;
    }
`;

const InputLabel = styled.label`
    position: absolute;
    top: 30px;
    left: 26px;
    color: #9B9B9B;
    font-size: 18px;
    font-weight: 400;
    transition: all .4s ease;
    cursor: text;
    z-index: -1;
    pointer-events: none;

    ${Input}:not(:placeholder-shown) + & {
        top: 24px;
        left: 28px;
        font-size: 14px;
        z-index: 1;
    }
`;

const NoLogin = styled.fieldset`
    align-self: flex-start;
    border: none;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
`;

const LogHelp = styled.span`
    padding-right: 50px;
    font-size: 0.9rem;
    color: #666;
`;

const Button = styled.button`
    box-sizing: border-box;
    width: 122px;
    height: 66px;
    margin: 10px 0;
    border: none;
    border-radius: 25px;
    background: linear-gradient(to right, #236BFE, #0D4ED3);
    color: #FFFFFF;
    font-size: 18px;
    font-weight: 400;
    align-self: flex-start;
    box-shadow: 0px 4px 30px rgba(34, 105, 251, 0.8);
`;

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();
  
    const handleForm = async (event: FormEvent) => {
        event.preventDefault();        

        const error = await SignIn(email, password);

        if (error) {
            return console.log(error);
        }

        return navigate('/home');
    }

    return (
        <Main>            
            <Form onSubmit={handleForm}>
                <Title>Welcome</Title>
                <Welcome>
                    Connect with other sports fans and share your preferences. Join us now and start exploring!
                </Welcome>
                <InputGroup>
                    <Input
                        type="email"
                        placeholder="User"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <InputLabel>User</InputLabel>
                </InputGroup>
                <InputGroup>
                    <Input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <InputLabel>Password</InputLabel>
                </InputGroup>
                <NoLogin>
                    <LogHelp>Forgot your <Link to={{ pathname: "/login/:ResetPassword" }}>password</Link>?</LogHelp>
                    <LogHelp>New <Link to={{ pathname: "/login/:NewUser" }}>user</Link>?</LogHelp>
                </NoLogin>

                <Button type="submit">Login</Button>
            </Form>
        </Main>
    );
}