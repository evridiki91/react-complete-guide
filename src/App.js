import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import Radium, {StyleRoot} from 'radium';

class App extends Component  {
  state = {
    persons: [
      {id: 'gfsdf', name: "Evridiki", age: 22},
      {id: 'afdsf', name: "Andreas", age: 28},
    ],
    otherState: "another state",
    showPersons: false
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

  nameChangedHandler = (event, userId) => {
      const person = this.state.persons.find();
      console.log(person)
    
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    })
  }

  deletePersonHandler = (index) => {
    // const persons = this.state.persons.slice(); //1st way to create new array
    const persons = [...this.state.persons]; //2nd way to create new array
    console.log("New persons array", persons);
    persons.splice(index, 1);
    console.log("New persons array after splice", persons);
    console.log("state persons array", this.state.persons);

    this.setState({persons: persons})
  }

  render(){
    const style = {
      backgroundColor: 'green',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }

    };
    let persons = null;
    if (this.state.showPersons){
      style.backgroundColor = "red";
      style[':hover'] = {
        backgroundColor: 'pink',
        color: 'white'
      }
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
            // key={person.id}
            click={() => this.deletePersonHandler(index)}
            name={person.name}
            age={person.age}
            change={(event) => this.nameChangedHandler(event, person.id)}>
            </Person>
          })}
        </div>
      )  
    }
    let classes = [];
    if (this.state.persons.length <=2){
      classes.push('red');
    }
    if( this.state.persons.length <=1){
      classes.push('bold')
    }

    return (
      <StyleRoot>
      <div className="App">
        <h1>Hi I'm a React app</h1>
        <p className={classes.join(' ')}>This is really working</p>
        <button 
          style={style}
          onClick={this.togglePersonsHandler}>Hide/Unhide persons</button>
      {persons}    
        
      </div>
      </StyleRoot>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1',null,'Ello there!'));
  }
}

 


export default Radium(App);
