import styled from 'styled-components';

import { useState, FormEvent } from "react";
import { useNavigate } from 'react-router-dom';

import SignIn from '../components/SignIn';

const Main = styled.main`
    width: 100%;
    font-size: 1rem;
    text-align: center;
    background: #E5E5E5;
`;

const Form = styled.form`
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
    width: 85%;
    font-size: 18px;
    margin: 7px 0;
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

const NoLogin = styled.span`
    font-size: 16px;
    align-self: flex-start;
    margin: 12px 0;
`;

const Button = styled.button`
    box-sizing: border-box;
    width: 122px;
    height: 66px;
    margin: 10px 0;
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
                    Welcome to Play Green! Connect with other sports fans and share your preferences. Join us now and start exploring!
                </Welcome>
                <InputGroup>
                    <Input
                        type="user"
                        placeholder="User"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <InputLabel>User</InputLabel>
                </InputGroup>
                <InputGroup>
                    <Input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <InputLabel>Password</InputLabel>
                </InputGroup>
                <NoLogin>Forgot your <a href='/login/:reset'>password</a>?</NoLogin>

                <Button type="submit">Login</Button>
            </Form>
        </Main>
    );
}