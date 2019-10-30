import React, {Component} from 'react';
import Person from './Person/Person'

class Persons extends Component{
    // static getDerivedStateFromProps(props,state){
    //     console.log('[Persons.js] getDerivedStateFromProps');
    //     return state;
    // }
    
    
    shouldComponentUpdate(nextProps,nextState){
        console.log('[Persons.js] shouldComponentUpdate');
        return true;
    }

    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log('[Persons.js] getSnapshotBeforeUpdate');
        return {message: 'Snapshot!'};
    }

    componentDidUpdate(prevProps, prevState, snapshot){
        console.log('[Persons.js] componentDidUpdate');
        console.log(snapshot);
    }

    render(){
        console.log('[Persons.js rendering...')
        return this.props.persons.map( (person, index) => {
            return (
            <Person
            key={person.id}
            click={() => this.props.click(index)}
            name={person.name}
            age={person.age}
            change={(event) => this.props.change(event, person.id)}>
            </Person>
            );
        });
    }
}

export default Persons;