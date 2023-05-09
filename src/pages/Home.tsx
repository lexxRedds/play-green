import styled from 'styled-components';

import Navbar from '../components/Navbar';

const Main = styled.main`
  font-size: 1rem;
`;

const Home = () => {  
  return(
    <Main>
      <Navbar />
    </Main>
)}

export default Home;