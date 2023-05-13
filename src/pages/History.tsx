import { getAuth } from "firebase/auth";

import { useFirestore, useFirestoreCollectionData, useAuth } from 'reactfire';

import { collection, query, where } from 'firebase/firestore';
import styled from 'styled-components';

import HistoryCard from '../components/HistoryCard';

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const History = () => {
  console.log('contando 4');
  
  const auth = getAuth();

  const firestore = useFirestore();
/*  const postsCollection = collection(firestore, 'posts');
  console.log('contando 1');
  const postsQuery = query(postsCollection, where('userId', '==', auth.currentUser?.uid));  //If is null tunrs undefined
  console.log('contando 2');
  
  const { data: postsData } = useFirestoreCollectionData(postsQuery);
  console.log('contando 3');*/

  return (
    <Main>{/*}
      {postsData.map((post) => (
        <HistoryCard key={post.postId} post={post.post} />
      ))}
      */}</Main>
  );
};

export default History;