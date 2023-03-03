import axios from 'axios';

export const fetchMatches = async (date = null) => {
  const dateRange = date ? `?dateFrom=${date}&dateTo=${date}` : '';
  const options = {
    method : 'GET',
    url: 'https://v3.football.api-sports.io/leagues',
    headers : {
      'x-rapidapi-key' : 'c2d65f440c37899e90e012fc9f138af1',
      'x-rapidapi-host' : 'v3.football.api-sports.io'
    }
  };
  return axios(options)
    .then((res) => res, (err) => err.response);
};

export const fetLeagueTable = async (leagueId) => {
  const options = {
    url: `${process.env.REACT_APP_API_BASE_URL}/competitions/${leagueId}/standings`,
    headers: { 'X-Auth-Token': process.env.REACT_APP_API_TOKEN }
  };
  return axios(options)
    .then((res) => res, (err) => err.response);
};