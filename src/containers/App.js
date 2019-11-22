import React, { Component } from 'react';
import cssClasses from '../containers/App.css'; //we create an object cssClasses that will have all the css classes of App.css
import Person from '../components/Persons/Person/Person';
import ErrorBoundary from '../ErrorBoundary';
import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit'
import withClass from '../hoc/withClass';
import Aux from '../hoc/Aux';

class App extends Component  {
  state = {
    persons: [
      {id: 'gfsdf', name: "Evridiki", age: 22},
      {id: 'afdsf', name: "Andreas", age: 28},
    ],
    otherState: "another state",
    showPersons: false,
    showCockpit: true,
    changeCounter: 0,
  }

  static getDerivedStateFromProps(props,state){
    console.log('[App.js] getDerivedStateFromProps');
    return state;
  }

  componentDidMount(){
    console.log('[App.js] componentDidMount')
  }

  shouldComponentUpdate(nextProps, nextState){
    console.log('[App.js] shouldComponentUpdate');
    return true;
  }

  componentDidUpdate(){
    console.log('[App.js] componentDidUpdate')
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
      
      this.setState((prevState,props) => {
        return {
          persons: persons,
          changeCounter: prevState.changeCounter + 1,
        }
      });
    };

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
    
    if (this.state.showPersons){

      persons = (
        <div>
          <Persons
          persons={this.state.persons}
          click={this.deletePersonHandler}
          change={this.nameChangedHandler}/>
        </div>
      )  
    }
    

    return (
      <Aux classes={cssClasses.App}>
        <button onClick={()=> this.setState({showCockpit: false})}>Remove cockpit</button>
        {this.state.showCockpit ? <Cockpit
        title={this.props.appTitle}
        showPersons={this.state.showPersons}
        personsLength={this.state.persons.length}
        click={this.togglePersonsHandler}/> : null}
      {persons}    
        
      </Aux>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1',null,'Ello there!'));
  }
}

export default withClass(App,cssClasses.App);
