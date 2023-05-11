import styled from 'styled-components';

import { useState } from 'react';

import Navbar from '../components/Navbar';
import ShareBtn from '../components/ShareBtn';

const Main = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 1rem;
`;

const Post = styled.article`
  font-size: 1rem;
`;

const Cover = styled.section`
  width: 100%;
  height: 60vh;
  background: #050505;
  border-radius: 32px;  
  font-size: 1rem;
`;

const Sport = styled.section`
  font-size: 1rem;
`;

const Share = styled.section`
  margin-top: 47px;
  display: flex;
  gap: 22px;
  justify-content: center;
  align-items: center;
`;

const Theme = styled.aside`
  font-size: 1rem;
`;

const Home = () => {
  const [ share, setShare ] = useState('none');

  return(
    <Main>
      <Post>
        <Theme />
        <Cover />
        <Sport />
        <Share>
          <ShareBtn buttonType='dislike' preference={(share === 'dislike').toString()} onClick={()=>setShare('dislike')} />
          <ShareBtn buttonType='like' preference={(share === 'like').toString()} onClick={()=>setShare('like')} />
        </Share>
      </Post>
      <Navbar />
    </Main>
)}

export default Home;