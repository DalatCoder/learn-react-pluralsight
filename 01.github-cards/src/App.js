import React, { useState } from 'react';
import _ from 'lodash';
import CardList from './CardList';
import Form from './Form';

const App = () => {
  const [profiles, setProfiles] = useState([]);

  const addNewProfile = profile => {
    setProfiles(_.concat(profiles, profile));
  };

  return (
    <div className="ui container">
      <h2 className="ui header">The Github Cards App</h2>
      <Form onFormSubmit={addNewProfile} />
      <CardList profiles={profiles} />
    </div>
  );
};

/*
class App extends React.Component {
  state = {
    profiles: []
  };

  addNewProfile = profile => {
    this.setState({
      profiles: _.concat(this.state.profiles, profile)
    });
  };

  render() {
    return (
      <div className="ui container">
        <h2 className="ui header">The Github Cards App</h2>
        <Form onFormSubmit={this.addNewProfile} />
        <CardList profiles={this.state.profiles} />
      </div>
    );
  }
}
*/

export default App;
