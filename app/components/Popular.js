import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import api from '../utils/api';


const SelectLanguage = () => {
  const languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'];
  return (
    <ul className="languages">
      {languages.map(lang =>
        (
          <li key={lang}>
            <NavLink activeClassName="active" to={`/popular/${lang.toLowerCase()}`}>
              {lang}
            </NavLink>
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

class Popular extends Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: [],
    };
  }
  componentDidMount() {
    this.updateLanguage(this.state.selectedLanguage);
  }
  componentWillReceiveProps(nextProps) {
    this.updateLanguage(nextProps.match.params.lang);
  }
  /*  componentWillUnmount(){
    api.cancelFetch();
  }*/
  updateLanguage() {
    api.fetchPopularRepos(this.props.match.params.lang)
    .then((repos) => {
      this.setState({ repos });
    });
  }
  render() {
    return (
      <div>
        <SelectLanguage />
        <RepoGrid repos={this.state.repos} />
      </div>
    );
  }
}

Popular.propTypes = {
  match: React.PropTypes.objectOf(React.PropTypes.any).isRequired,
};

export default Popular;
