import axios, { AxiosResponse } from 'axios';

export interface Player {
  strSport: string;
  strThumb: string;
}

interface APIResponse {
  players: Player[];
}

const urlGenerator = () => {
    const url = 'https://www.thesportsdb.com/api/v1/json/3/lookupplayer.php?id=341';
    const INITIAL_VALUE = 45337;
    const FINAL_VALUE = 99899;

    const index = Math.round(INITIAL_VALUE + (FINAL_VALUE - INITIAL_VALUE) * Math.random());
    return url + index.toString();
}

export async function fetchData(): Promise<Player> {
  console.log('Paso 4');
  const response: AxiosResponse<APIResponse> = await axios.get<APIResponse>(urlGenerator());
  const data: Player = response.data.players[0];
  return data;
}