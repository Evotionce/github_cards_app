import React from 'react';
import './App.css';
import CardList from './CardList';
import Form from './Form';

// final code example: https://jscomplete.com/playground/rgs2.7

class App extends React.Component {

  state = {
    profiles: [],
  };
  addNewProfile = (profileData) => {
    console.log('App', profileData);
    this.setState(prevState => ({
      profiles: [...prevState.profiles, profileData]
    }));
  };

  // required!
  render() {
    return (
      <div>
        <div className="header">{this.props.title}</div>
        <Form onSubmit={this.addNewProfile} />
        <CardList profiles={this.state.profiles} />
      </div>

    );
  }
}

export default App;
