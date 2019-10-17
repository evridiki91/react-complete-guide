import React from 'react';
import cssClasses from './Person.css'

const person = (props) => {
    const rndm = Math.random();

    if (rndm > 0.7) {
        throw new Error('Something Went wrong');
    }
   return (
       <div className= {cssClasses.Person} >
            <p onClick={props.click}>I'm {props.name} and I am {props.age}  years old</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.change} value={props.name}></input>
       </div>
   ); 
}

export default person;