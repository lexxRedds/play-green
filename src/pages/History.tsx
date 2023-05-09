import styled from 'styled-components';
import { useSigninCheck } from 'reactfire';

import { useNavigate } from 'react-router-dom';

import Navbar from '../components/Navbar';

const Main = styled.main`
  font-size: 1rem;
`;

export default function History() {
  const { status, data: signInCheckResult } = useSigninCheck();

  const navigate = useNavigate();

  if (status === 'loading') {
    return <span>loading...</span>;
  } else  if(!signInCheckResult.signedIn) {
    navigate('/login');
  }

  return(
    <Main>
      <Navbar />
    </Main>
  ) 
}