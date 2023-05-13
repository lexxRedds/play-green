import { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useUser, useAuth } from 'reactfire';
import styled from 'styled-components';

const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SignUpForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const SignUpInput = styled.input`
  padding: 5px;
`;

const SignUpButton = styled.button`
  padding: 10px;
`;

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const auth = useAuth();
  const user = useUser();
  console.log(auth);
  
  const handleSignUp = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      console.log('User created successfully!');
      // Additional logic or redirect after successful signup
    } catch (error) {
      console.error('Error creating user:', error);
    }
  };

  if (user.data) {
    // Redirect or show different content if the user is already signed in
    return <div>You are already signed in.</div>;
  }

  return (
    <SignUpContainer>
      <h2>Sign Up</h2>
      <SignUpForm onSubmit={handleSignUp}>
        <SignUpInput
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <SignUpInput
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <SignUpButton type="submit">Sign Up</SignUpButton>
      </SignUpForm>
    </SignUpContainer>
  );
};

export default SignUp;
