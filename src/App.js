import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component  {
  state = {
    persons: [
      {name: "Evridiki", age: 22},
      {name: "Andreas", age: 28},
    ],
    otherState: "another state"
  }

  
  switchNameHandler = (newName) => {
    // console.log("was clicked");
    // DONT DO THISthis.state.persons[0].name = "Evridikoula";
    this.setState({
      persons: [
        {name: newName, age: 22},
        {name: "Andreas", age: 27},
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        {name: 'Evridiki', age: 22},
        {name: event.target.value, age: 28}
      ]
    })
  }

  render(){
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };
    return (
      <div className="App">
        <h1>Hi I'm a React app</h1>
        <button 
          style={style}
          onClick={this.switchNameHandler.bind(this, "Evridiki!")}>Switch name</button>
        <Person 
          name = {this.state.persons[0].name} 
          age = {this.state.persons[0].age}>
        </Person>
        <Person 
        name={this.state.persons[1].name} 
        age={this.state.persons[1].age}
        click={this.switchNameHandler.bind(this,'Evi')}
        change={this.nameChangedHandler}></Person>
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1',null,'Ello there!'));
  }
}

 


export default App;
