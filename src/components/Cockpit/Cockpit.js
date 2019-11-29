import React, {useEffect, useRef} from 'react';
import cssClasses from './Cockpit.css'; //we create an object cssClasses that will have all the css classes of App.css
import AuthContext from '../../context/auth-context'

const cockpit = (props) => {
    const toggleButtonRef = useRef(null);

    

    useEffect(() => {
      toggleButtonRef.current.click();
      console.log('[cockpit.js] useEffect');
      //Http request
      // setTimeout(()=> {
      //   alert('Saved data to cloud');
      // },1000);
      return () => {
        console.log('[cockpit.js] cleanup work')
      }
    },[]); 

    useEffect( () => {
      console.log('[cockpit.js] 2nd useEffect');
      return() => {
        console.log('[cockpit.js] cleanup work in 2nd userEffect');
      }
    })


    let classes = [];
    let btnClasses = [];
    if(props.showPersons) {
      btnClasses.push(cssClasses.Red);
      btnClasses.push(cssClasses.Cockpit);
    }
    if (props.personsLength <=2){
      classes.push(cssClasses.Red);
    }
    if( props.personsLength <=1){
      classes.push(cssClasses.Bold)
    }

    return(
        <div>
            <h1>{props.title}</h1>
            <p className={classes.join(' ')}>This is really working</p>
            <button ref={toggleButtonRef} className={btnClasses.join(' ')}
            onClick={props.click}>Hide/Unhide persons</button>
            <AuthContext.Consumer>
              {(context) => <button onClick={context.login}>Log in</button>}
            </AuthContext.Consumer>
        </div>
    );
};

export default React.memo(cockpit);