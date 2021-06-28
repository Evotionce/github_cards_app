import React from 'react';
import './App.css';
import CardList from './CardList';
import Form from './Form';


//TODO: continue https://app.pluralsight.com/course-player?clipId=43aac0ac-3fe2-43fa-a70e-bb86cc955351

const testData = [
  { name: "Dan Abramov", avatar_url: "https://avatars0.githubusercontent.com/u/810438?v=4", company: "@facebook" },
  { name: "Sophie Alpert", avatar_url: "https://avatars2.githubusercontent.com/u/6820?v=4", company: "Humu" },
  { name: "Sebastian Markbåge", avatar_url: "https://avatars2.githubusercontent.com/u/63648?v=4", company: "Facebook" },
];
class App extends React.Component {

  state = {
    profiles: testData,
  };

  // required!
  render() {


    return (
      <div>
        <div className="header">{this.props.title}</div>
        <Form />
        <CardList profiles={this.state.profiles} />
      </div>

    );
  }
}

export default App;
