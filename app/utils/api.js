import axios, { CancelToken } from 'axios';

const source = CancelToken.source();

const id = 'YOUR_CLIENT_ID';
const sec = 'YOUR_SECRET_ID';
const params = `?client_id=${id}&client_secret=${sec}`;

const getProfile = username => (
  axios.get(`https://api.github.com/users/${username}`)
  .then(response => response.data)
);

const getRepos = username => (
  axios.get(`https://api.github.com/users/${username}/repos&per_page=100`)
  .then(response => response.data)
);

const getStarCount = repos => (
  repos.data.reduce((count, repo) => count + repo.stargazers_count)
);

const calculateScore = (profile, repos) => {
  const followers = profile.followers;
  const totalStars = getStarCount(repos);
  return (followers * 3) + totalStars;
};

const handleError = (error) => {
  console.warn(error);
  return null;
};

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
