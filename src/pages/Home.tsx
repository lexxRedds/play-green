import styled from 'styled-components';

import { useState, useEffect, useMemo } from 'react';

import Navbar from '../components/Navbar';
import ShareBtn from '../components/ShareBtn';

import { Player, fetchData } from '../components/FetchData';

const Main = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 1rem;
`;

const Post = styled.article`
  display: grid;
  grid-template-rows: 63% 14% 23%;
  grid-template-columns: repeat(10, 1fr);
  height: 100%;
  font-size: 1rem;
`;

const Cover = styled.section`
  grid-column: 1 / 11;
  grid-row: 1 / 3;
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 32px;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

const Theme = styled.aside`
  grid-column: 1 / 4;
  grid-row: 1 / 2;
  margin: 22px 0 0 22px;
  width: 62px;
  height: 63px;
  border-radius: 18px;
  background: white;
  background-image: url('../src/assets/🌙.svg');
  background-size: auto;
  background-position: center;
  background-repeat: no-repeat;
  z-index: 2;
`;

const Sport = styled.section`
  grid-column: 1 / 11;
  grid-row: 2 / 3;
  background: linear-gradient(to top, black 70%, transparent);
  border-bottom-left-radius: 32px;
  border-bottom-right-radius: 32px;
  padding: 2rem;
  font-size: 2.5rem;
  color: white;
  font-weight: 700;
`;

const Share = styled.section`
  grid-column: 4 / 8;
  grid-row: 3 / 4;
  display: flex;
  gap: 22px;
  justify-content: center;
  align-items: center;
`;


const Home = () => {
  const [ share, setShare ] = useState('none');
  const [playerData, setPlayerData] = useState<Player>({ strSport: '', strThumb: '' });

  const memoizedButtons = useMemo(() => (
    <Share>
      <ShareBtn
        buttonType="dislike"
        preference={(share === 'dislike').toString()}
        onClick={()=>setShare('dislike')}
      />
      <ShareBtn
        buttonType="like"
        preference={(share === 'like').toString()}
        onClick={()=>setShare('like')}
      />
    </Share>
  ), [share]);
  
  console.log('Paso 1');
  useEffect(() => {
    (async () => {
      try {
        const player: Player = await fetchData();
        setPlayerData(player);
      } catch(error) {
        console.log('Error fetching player data:', error);
      }
    })();
  },[share]);

  return(
    <Main>
      <Post>
        <Theme />
        <Cover><Img src={playerData.strThumb} alt={playerData.strSport} /></Cover>
        <Sport>{playerData.strSport}</Sport>
        {memoizedButtons}
        {/*<Share>
          <ShareBtn buttonType='dislike' preference={(share === 'dislike').toString()} onClick={()=>setShare('dislike')} />
          <ShareBtn buttonType='like' preference={(share === 'like').toString()} onClick={()=>setShare('like')} />
  </Share>*/}
      </Post>
      <Navbar />
    </Main>
)}

export default Home;