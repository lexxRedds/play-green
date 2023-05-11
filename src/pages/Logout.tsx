import { getAuth, signOut } from "firebase/auth";
import styled from 'styled-components';
import { useEffect } from 'react';

const Main = styled.main`
    font-size: 1rem;
`;

export default function Logout() {
  useEffect(() => {
    const auth = getAuth();

    signOut(auth).then(() => {
      window.location.replace("/");
    })
    .catch((error) => {
      console.log(error);
    });
  },[]);

  return <Main>Saliendo...</Main>;
}