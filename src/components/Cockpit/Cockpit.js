import React from 'react';
import cssClasses from './Cockpit.css'; //we create an object cssClasses that will have all the css classes of App.css


const cockpit = (props) => {
    let classes = [];
    let btnClass = '';
    if(props.showPersons) {
      btnClass = classes.Red
    }
    if (props.persons.length <=2){
      classes.push(cssClasses.Red);
    }
    if( props.persons.length <=1){
      classes.push(cssClasses.Bold)
    }

    return(
        <div>
            <h1>{props.title}</h1>
            <p className={classes.join(' ')}>This is really working</p>
            <button className={btnClass}
            onClick={props.click}>Hide/Unhide persons</button>
        </div>
    );
};

export default cockpit;