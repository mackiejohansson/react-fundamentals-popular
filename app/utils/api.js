import axios, { CancelToken } from 'axios';

const source = CancelToken.source();

module.exports = {
  fetchPopularRepos: (language) => {
    const encodedURI = window.encodeURI(`https://api.github.com/search/repositories?q=stars:>1+language:${language}&sort=stars&order=desc&type=Repositories`);
    return axios.get(encodedURI, {
      cancelToken: source.token,
    })
     .then(response => response.data.items);
  },
};
