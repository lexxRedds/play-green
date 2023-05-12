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
  
  const auth = useAuth();

  const firestore = useFirestore();
  const postsCollection = collection(firestore, 'posts');
  const postsQuery = query(postsCollection, where('userId', '==', auth.currentUser?.uid));  //If is null tunrs undefined
  
  
  const { data: postsData } = useFirestoreCollectionData(postsQuery);


  return (
    <Main>
      {postsData.map((post) => (
        <HistoryCard key={post.postId} post={post.post} />
      ))}
    </Main>
  );
};

export default History;