import React, { Component } from 'react';
import cssClasses from './App.css'; //we create an object cssClasses that will have all the css classes of App.css
import Person from './Person/Person';
import ErrorBoundary from './ErrorBoundary';

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
      const personIndex = this.state.persons.findIndex( p => {
        return p.id === userId;
      });
      
      const person = {
        ...this.state.persons[personIndex]
      }

      person.name = event.target.value;
      const persons = [...this.state.persons];
      persons[personIndex] = person;
      this.setState({persons: persons});
      
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
    
    let persons = null;
    let btnClass = '';
    if (this.state.showPersons){

      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <ErrorBoundary key={person.id}>
            <Person
            // key={person.id}
            click={() => this.deletePersonHandler(index)}
            name={person.name}
            age={person.age}
            change={(event) => this.nameChangedHandler(event, person.id)}>
            </Person></ErrorBoundary>
          })}
        </div>
      )  
      btnClass = cssClasses.Red;
    }
    let classes = [];
    if (this.state.persons.length <=2){
      classes.push(cssClasses.Red);
    }
    if( this.state.persons.length <=1){
      classes.push(cssClasses.Bold)
    }

    return (
      <div className={cssClasses.App}>
        <h1>Hi I'm a React app</h1>
        <p className={classes.join(' ')}>This is really working</p>
        <button className={btnClass}
          onClick={this.togglePersonsHandler}>Hide/Unhide persons</button>
      {persons}    
        
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1',null,'Ello there!'));
  }
}

 


export default App;
