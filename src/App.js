import React, { Component } from 'react';

class ContactList extends React.Component {
  render() {
    const people = [
      { name: "Zach"},
      { name: "Heather" },
      { name: "Nick" },
    ]

    return <ol>
      {people.map((person) => (
        <li key={person.name}>{person.name}</li>
      ))}
    </ol>
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <ContactList />
        <ContactList />
        <ContactList />
      </div>
    );
  }
}

export default App;
