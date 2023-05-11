import { useFirestore, useFirestoreCollectionData, useAuth } from 'reactfire';

import { useState, useEffect } from 'react';
import { collection, query, where, getDocs } from 'firebase/firestore';
import styled from 'styled-components';

import HistoryCard from '../components/HistoryCard';

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const History = () => {
  //const { currentUser } = useAuth();
  //const [posts, setPosts] = useState<firebase.firestore.DocumentData[]>([]);
  
  const auth = useAuth();
  //const postsRef = useFirestore().collection('posts').where('userId', '==', auth.currentUser.uid);
  const firestore = useFirestore();
  const postsCollection = collection(firestore, 'posts');
  const postsQuery = query(postsCollection, where('userId', '==', auth.currentUser.uid))
  
  
  const { data: postsData } = useFirestoreCollectionData(postsCollection);


  return (
    <Main>
      {postsData.map((post) => (
        <HistoryCard key={post.postId} post={post} />
      ))}
    </Main>
  );
};

export default History;