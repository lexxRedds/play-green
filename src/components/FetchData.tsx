import axios, { AxiosResponse } from 'axios';

interface Player {
  strSport: string;
  strThumb: string;
}

interface APIResponse {
  players: Player[];
}

export async function fetchData(): Promise<Player> {
  const response: AxiosResponse<APIResponse> = await axios.get<APIResponse>('https://www.thesportsdb.com/api/v1/json/3/lookupplayer.php?id=34145337');
  const data: Player = response.data.players[0];
  return data;
}
