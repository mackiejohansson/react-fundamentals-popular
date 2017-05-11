import axios, { CancelToken } from 'axios';

const source = CancelToken.source();

const id = "YOUR_CLIENT_ID";
const sec = "YOUR_SECRET_ID";
const params = "?client_id=" + id + "&client_secret=" + sec;


module.exports = {
  battle: (players) => {

  },
  fetchPopularRepos: (language) => {
    const encodedURI = window.encodeURI(`https://api.github.com/search/repositories?q=stars:>1+language:${language}&sort=stars&order=desc&type=Repositories`);
    return axios.get(encodedURI, {
      cancelToken: source.token,
    })
     .then(response => response.data.items);
  },
};
