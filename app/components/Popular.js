import React, { Component } from 'react';
import api from '../utils/api';


const SelectLanguage = ({ selectedLanguage, onSelect }) => {
  const languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'];
  return (
    <ul className="languages">
      {languages.map(lang =>
        (
          <li
            onClick={() => onSelect(lang)}
            key={lang}
            style={lang === selectedLanguage ? { color: '#d0021b' } : null}
          >
            {lang}
          </li>
        ),
      )}
    </ul>
  );
};

const RepoGrid = ({ repos }) => (
  <ul className="popular-list">
    {repos.map((repo, index) =>
      (
        <li key={repo.name} className="popular-item">
          <div className="popular-rank"> #{index + 1} </div>
          <ul className="space-list-items">
            <li>
              <img
                className="avatar"
                src={repo.owner.avatar_url}
                alt={`avatar for ${repo.owner.login}`}
              />
            </li>
            <li><a href={repo.html_url}>{repo.name}</a></li>
            <li>@{repo.owner.login}</li>
            <li>{repo.stargazers_count} stars</li>
          </ul>
        </li>
      ),
    )}
  </ul>
);

RepoGrid.propTypes = {
  repos: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
};

SelectLanguage.propTypes = {
  selectedLanguage: React.PropTypes.string.isRequired,
  onSelect: React.PropTypes.func.isRequired,
};

class Popular extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedLanguage: 'All',
      repos: [],
    };
    this.updateLanguage = this.updateLanguage.bind(this);
  }
  componentDidMount() {
    this.updateLanguage(this.state.selectedLanguage);
  }
  /*  componentWillUnmount(){
    api.cancelFetch();
  }*/
  updateLanguage(lang) {
    api.fetchPopularRepos(lang)
    .then((repos) => {
      this.setState({ repos, selectedLanguage: lang });
    });
  }
  render() {
    return (
      <div>
        <SelectLanguage
          selectedLanguage={this.state.selectedLanguage}
          onSelect={this.updateLanguage}
        />
        <RepoGrid repos={this.state.repos} />
      </div>
    );
  }
}

module.exports = Popular;
