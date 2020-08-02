import React from 'react';
import axios from 'axios';

class Form extends React.Component {
  state = { term: '' };

  onFormSubmit = async event => {
    event.preventDefault();
    const response = await axios.get(
      `https://api.github.com/users/${this.state.term}`
    );
    this.props.onFormSubmit(response.data);

    this.setState({ term: '' });
  };

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="ui form">
        <input
          value={this.state.term}
          onChange={e => this.setState({ term: e.target.value })}
          type="text"
          placeholder="Enter github name"
        />
      </form>
    );
  }
}

export default Form;
