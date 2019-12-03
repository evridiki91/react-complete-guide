# React Notes

## Create Components 
In React, you can create functions that use HTML code. You can add parameters inside the HTML elements and update them dynamically using ReactDOM. 

### Example1: 
```
function Person(props) {
  return (
    <div className="person">
      <h1>{props.name}</h1>
        <p>Age : {props.age}</p>
    </div> 
  );
}
```

`
Notice: we use className instead of class for the css class. This will then be translated into class (if we inspect the code we will see class and not className)
`

### Example2:
We can also use a ES6 class to define a component. But, classes have some additional features that we can use. 
```
class Person extends React.Component {
  render() {
    return (
    <div className="person">
      <h1>{props.name}</h1>
      <p>Age : {props.age}</p>
    </div> 
  );
  }
}
``` 

We have created a function called Person (Make sure you use a capital letter for functions) which creates a simple component with name and age. 

The code wrapped in parenthesis is called JSX. It allowes us to use simple HTML code that will later be translated to JS. (But we don't need to translate it).

In order to render this though we need to use reactDOM. ReactDOM has a predefined rendering method so we can use that. 

```
ReactDOM.render(<Person name="Evridiki" age="22" />, document.querySelector('#p1'));
```
Notice: We used the `props` parameter in our function, which then allows us to access all of its attributes by `props.something` . We have created a div element in our HTML and added the id of "p1" so we could select it then using `document.querySelector('#p1')` . 

Every time we want to add a new Person component we would have to add a new div element in our html, give it an id and then render it using ReactDOM. But, if we don't want to do that, and we want to only execute the render code once, we can add a single div element in our html: 

```
<div id="app"></div>
```
Then we can add a JSX element in our JS code: 
```
var app = (
  <div>
    <Person name="Evridiki" age="22" />
    <Person name="Andreas" age="22" />
  </div>
);
```
Notice that a JSX elements **requires ONLY 1** root element so we need to wrap our Person components with a div element.

Then we can simply render using the render method from ReactDOM like before. 

```
ReactDOM.render(app, document.querySelector('#app'));
```

# Refreshing Next Generation JavaScript
## Understanding let and const
var : creates a variable in JS

let: Use let for variable values (Μεταβλητές)

const: Use const for constant values (Αμετάβλητες)

## Arrow functions

```
const printMyName = (name) => console.log(name);

printMyName('Evridiki');
```
We can skip the parenthesis for the parameters if there's only one.

## Exports and Imports (Modules)
`export default nameOfFunction`

`import nameOfFunction from './fileName.js'`
If we used "default" when we exported our function then we can name the function whatever we want when we import it to a different file since it will be the default no matter what. So we could also do: 

`import whateverWeWant from './fileName.js'`
and it will still import `nameOfFunction`.

If we do: 
`export nameOfFunction` though we will need to use the curly braces when importing it to a different file. 

`import {nameOfFunction} from './fileName.js'`
or 

`import {nameOfFunction as name} from './fileName.js'`

To import everything from a file: 
`import * as bundled from './fileName.js'`

## Classes 
Defining a class :

```
class Person {
    name = 'Evridiki'
    call = () => {...}
}
```
Using classes: 
```
const myPerson = new Person();
myPerson.call();
console.log(myPerson.name);
```

Inheritance 
`class Person extends Master`

```
class Human {
  constructor() {
    this.gender = 'female';
  }
  
  printGender() {
    console.log(this.gender);
  }
}

class Person extends Human {
   constructor(){
     super();
     this.name = 'Evridiki';
   }
   
   printMyName(){
     console.log(this.name);
   }
 }

const person = new Person();
person.printMyName();
person.printGender();
```
It's important to call `super();` in our class otherwise we will get this error: 
```
ReferenceError: Must call super constructor in derived class before accessing 'this' or returning from derived constructor
```

## Classes, Properties and Methods

The new syntax for ES7 JS is: 

```
class Human {
  gender = 'female';
  
  printGender = () => {
    console.log(this.gender);
  }
}

class Person extends Human {
   name = 'Evridiki';
  
   printMyName = () => {
     console.log(this.name);
   }
 }
 ```
 We get rid of the constructor methods, and we don't have to use `this` anymore nor call `super();`

 
## Spread and Rest Operators

Spread : Used to split up array elements OR object properties.

```
const newArray = [...oldArray, newElement1, newElement2]
```

```
const newObject = {
    ...oldObject,
    newProp: 5
}
```

```
const numbers = [1,2,3];
const newNumbers = [numbers,4,5];

console.log(newNumbers);
```
will print which shows the `numbers` array as a single element.
```
[[1, 2, 3], 4, 5]
```

But if we use the spread operator (...) we can split up the `numbers` array.

```
const newNumbers = [...numbers,4,5];
```
which will print 
```
[1, 2, 3, 4, 5]
```

```
const person = {
  name: 'Max'
};

const newPerson = {
  ...person,
  age: 28
}

console.log(person);
console.log(newPerson);
```

will print:
```
[object Object] {
  name: "Max"
}
[object Object] {
  age: 28,
  name: "Max"
}
```

Rest: Used to merge a list of function arguments into an array.

```
function sortArgs(...args) {
    return args.sort();
}
```

## Destructuring 
Easily extract array elements or object properties and save them in variables. It does sound like spread operator but spread takes out ALL ELEMENTS AND ALL OBJECT PROPERTIES and distributes in a new array or object. Destructuring allows us to extract SINGLE elements or properties and store them in variables.

Array destructuring: 
```
[a,b] = ['Hello', 'Evridiki']
console.log(a) //Hello
console.log(b) //Evridiki
```

Object destructuring
```
{name} = {name: 'Max', age: 28}
console.log(name) //Max
console.log(age) //undefined
```

## Reference and Primitive Types Refresher

Primitive types is when the value is copied over. So if we define a variable called `number1` and set it to 1, and then define another variable called `number2` and set it to `number1`, then `number1`'s value will be copied over to `number2`.

Reference type is for arrays and objects. So if we create an object called `Person` and then create a 2nd object called `secondPerson` then secondPerson has a pointer that points to `Person` and `Person` is not COPIED to the `secondPerson`. 
So if we change a property of `Person` after we set `secondPerson` to be `Person` and we print `secondPerson` we will notice that the new property is printed since we always point at the first Object and we haven't just copied its data to the new object.

```
const person = {
  name: 'Max'
};

const secondPerson = person;
person.name = 'Manu';
console.log(secondPerson);
```

Prints: 
```
[object Object] {
  name: "Manu"
}
```

Same if we change a property of `secondPerson` and log `person`.

In order to COPY the data over, we can use `spread`.

```
const person = {
  name: 'Max'
};

const secondPerson = {
  ...person
};
person.name = 'Manu';
console.log(secondPerson);
```
This will print:
```
[object Object] {
  name: "Max"
}
```

## Refreshing Array Functions
 Remember, `map()` `filter()` and other useful functions. 

 ```
 const numbers = [1,2,3];

const doubleNumArray = numbers.map((number) => {
  return number*2
});

console.log(doubleNumArray);
```
`//[2,4,6]`

map()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

find()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find

findIndex()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex

filter()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

reduce()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce?v=b

concat()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat?v=b

slice()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice

splice()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice

## Working with Props
In React we can pass arguments from our App in a component and access them with the props attribute in the actual component. 

```
const person = (props) => {
   return (
       <p>I'm {props.name} and I am {props.age}  years old</p>
   ); 
}
```

Above, we can see our component. We define props in the component's parameters and we can access name and age by `props.name` and `props.age`. 

In our App component we can set those attributes. 
```
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi I'm a React app</h1>
        <Person name="Evridiki" age="22"></Person>
        <Person name="Andreas" age="22"></Person>
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1',null,'Ello there!'));
  }
}
``` 
We can see that we've set name and age in our custom `Person` component. 
` <Person name="Evridiki" age="22"></Person>` We've written our component like a regular html element (JSX in real).

**So we've seen how to receive `props` as arguments and output them dynamically in our App. ** `props` allows you to pass data from a parent (wrapping) component to a child (embedded) component. In our case parent=App child=Person.

If we had something in between the closing tags: 
```
<Person name="Andreas" age="22">My hobbies are: Racing</Person>
```

we could access it with `props.children`. We didn't set the `children` property. It's a reserved word. `children` refers to any elements (including text) between the opening and closing tags in our code. It could enclose anything, e,g ordered list, html elements in general etc. 

## Understanding and using State
Whilst `props` allows you to pass data down the component tree (and hence trigger a UI update), state is used to change the component, well, state from within. Changing something in state will lead React to `rerender` the element, hence it will trigger a UI update. 

## To which events can you listen?
https://reactjs.org/docs/events.html#supported-events this is a list of all the events we can listen to. 

## Managing state in class components

In class components we can change the state using React's predefined method `setState`. 
```
// DONT DO THISthis.state.persons[0].name = "Evridikoula";
    this.setState({
      persons: [
        {name: "Evridiki", age: "27"},
        {name: "Andreas", age: "22"},
      ]
    })
```

## Managing state in functional components
We can use `useState` from Hooks in order to give state functionality to functional components. 

```
const app = props => {
  const [personsState, setPersonsState] = useState({
    persons: [
      {name: "Evridiki", age: "22"},
      {name: "Andreas", age: "22"},
    ],
    otherState: "lelele"
  });
```
Here, `personsState` is the initial state (gives us access to the initial state), and `setPersonsState` allows us to set a new state. So we call this in our `switchNameHandler` method in order to set a new state.

**IMPORTANT** : When we set a new state with `setPersonsState` state doesn't get updated (like in class components), it actually gets REPLACED. Which means that `otherState` will disappear! So we have to make sure that we copy over the `otherstate` to ensure that it will stay there. 
`otherState: personsState.otherState` : now we ensure that other state will be the initial `otherState`.

A more **ELEGANT** way of doing this though, is to not merging your state at all and use `useState` multiple times. 

So to update otherState we can: 
```
const [otherState, setOtherState] = useState("lelele");
```
And make sure to remove `otherState` from our state. 

```
  const [otherState,setOtherState] = useState('some other state')
  
  console.log(personsState, otherState)
  const switchNameHandler = () => {
    // console.log("was clicked");
    // DONT DO THISthis.state.persons[0].name = "Evridikoula";
    setPersonsState({
      persons: [
        {name: "Evridiki", age: "27"},
        {name: "Andreas", age: "22"},
      ],
      otherState: personsState.otherState
    })
  }
    return (
      <div className="App">
        <h1>Hi I'm a React app</h1>
        <button onClick={switchNameHandler}>Switch name</button>
        <Person name={personsState.persons[0].name} age={personsState.persons[0].age}></Person>
        <Person name={personsState.persons[1].name} age={personsState.persons[1].age}></Person>
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1',null,'Ello there!'));
  }
```

## Passing method references between components
If we want to call a method but it doesn't belong to that component we will have to pass a reference of that method into the component. How?

So, if we want to call a method when we click on a paragraph element inside our `Person` component we could add an `OnClick` event listener. 

```
const person = (props) => {
   return (
       <div>
            <p onClick={}>I'm {props.name} and I am {props.age}  years old</p>
            <p>{props.children}</p>
       </div>
   ); 
}
```
But how can we call that method if it's not imported in this file?

-> We can pass a reference to the method as a property to our component. So in one of our `Person` components in `App.js` we add a new property called `click` that will reference the method we wanna use: 
```
<Person 
  name={this.state.persons[1].name} 
  age={this.state.persons[1].age}
  click={this.switchNameHandler}>
</Person>
``` 
We can now call this property inside our actual Person component: 
```
const person = (props) => {
   return (
       <div>
            <p onClick={props.click}>I'm {props.name} and I am {props.age}  years old</p>
            <p>{props.children}</p>
       </div>
   ); 
}
```
Now when we click on the paragraph of that Person component `switchNameHandler` is executed. 
**Now what if we want to pass an argument while calling that method?**
We can call bind on the method reference: 
```
click={this.switchNameHandler.bind(this, "Evi")}
```

and our method now looks like this:
```
switchNameHandler = (newName) => {
  this.setState = [
    {name: newName, age: '22'},
    {name: 'Max', age: 27}
  ]
}
```
**REVISION OF BIND**
The bind method createds a new function that, when called, has its `this` keyword set to the provided value, with a given sequence of arguments preceding any provided when the new function is called. 

## Adding Styling with Stylesheets
Create a css file for your class, usually called className.css and import it in the .js file. 

## Working with inLine Styles
Just create a JS object for the styling.
```
const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };
```
and add this to your element:
`<button style={style}>`

## First simple assignment
https://github.com/facebookincubator/create-react-app
https://reactjs.org/docs/introducing-jsx.html
https://reactjs.org/docs/rendering-elements.html
https://reactjs.org/docs/components-and-props.html
https://reactjs.org/docs/events.html


# Rendering Lists & Conditional Content

### Rendering Content conditionally
We can render a list of elements based on a conditional. For example, if we want to hide/unhide all of our Person components we can easily: 

1. Wrap all components in a `div` element. 
2. Add a new state property to track whether they are hidden or not. 
3. Add a handler method that will hide/unhide them. 
4. Finally wrap the div element in curly brackets and add a conditional to check whether they need to be shown or not. 
   
```
{show ? 
  <div>
    ...All the components...
  </div>
: null}
```
So, either show, or do nothing (null).

```
 onClick={this.togglePersonsHandler}>Switch name</button>

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    })
  }
```

## Handling Dynamic Content (the javascript way)
In our previous section we saw how to render content conditionally. We used the ? something : somethingElse. 
IN this section we will use Javascript code to render components. How? Simply by creating a variable and assign a value to it. 

`let persons = null;`

Then we can simply add an if statement: 
```
if( this.state.showPersons){
    persons = (
        <div>
             <Person>
                    name={this.state.persons[0].name}
                    age={this.state.persons[0].age}
            </Person>
            <Person>
                    name={this.state.persons[1].name}
                    age={this.state.persons[1].age}
            </Person>
            <Person>
                    name={this.state.persons[2].name}
                    age={this.state.persons[2].age}
            </Person>
        </div>
    );
}
```
This was all done in our render method since React will execute this method whenever something gets updated. We can then simply use `persons` in our return.
`{persons}`. Whenever render() is called persons will hide/unhide depending on what `showPersons` is at that moment.

## Outputing Lists
We simply return all of elements from persons list, using Person components. So
In the end we will end up with lots of Person components. This is more efficient than the previous method since we don't have to manually change our code if a person gets updated. For example, if we
got a new age for persons[0].
```
if( this.state.showPersons){
    persons = (
        <div>
            {this.state.persons.map(person => {
                return <Person>
                    name={person.name}
                    age={person.age}
                </Person>
            })}
        </div>
    );
}
```
## Lists and State
If we want to delete a person from the list we rendered before, we would need to know WHICH component to delete. In order to do that we will need an index to identify
which component we want to delete. Map function has a second argument called index, which we can use to idenify the index of the current person. 
```
if( this.state.showPersons){
    persons = (
        <div>
            {this.state.persons.map((person, index) => {
                return <Person>
                    click={() => this.deletePersonHandler(index)}
                    name={person.name}
                    age={person.age}
                </Person>
            })}
        </div>
    );
}
```
We used 
```
click={() => this.deletePersonHandler(index)}
```
we passed index as a parameter to an arrow function. 
We could use a different syntax here: 
```
click={this.deletePersonHandler.bind(this, index)}
```

```
deletePersonHandler = (personIndex) => {
    const persons = this.state.persons;
    persons.splice(personIndex,1); //This removes this person from the list
    this.setState({persons: persons}) //call setState to update the state with the new list (without that person)

}
```
IMPORTANT: This approach has a flaw and we will discuss this flaw in the next section.

## Updating State Immutably 
The flaw we discussed before was that: In JS, Objects and Arrays are `reference` types.
So the correct approach is to actually create a new array. There are 2 ways to do that, with either using `slice` JS method which returns a new list or `spread` operator (three dots ...).

```
 deletePersonHandler = (index) => {
    // const persons = this.state.persons.slice(); //1st way to create new array
    const persons = [...this.state.persons]; //2nd way to create new array
    console.log("New persons array", persons);
    persons.splice(index, 1);
    console.log("New persons array after splice", persons);
    console.log("state persons array", this.state.persons);

    this.setState({persons: persons})
  }
```
if we log these we can see that the state.persons doesn't get spliced. 
<img src="/Users/evridiki91/Desktop/react-complete-guide/src/images/logs_splice.png"/>

## Lists and Keys
We can see this error in our console. 
```
Each child in a list should have a unique "key" prop.
Check the render method of `App`.
```
This is because each child should have a unique id for the default "key" prop. 
We can easily assign a unique id prop to our state for all of our persons and set key={person.id}.

### Styling React components
In inline styling we can't style with pseudo selectors (hover etc. ). We can download an external package called `radium` to do so. 
`npm install radium` 
Make sure to import it in the file you want to use it: 

`import Radium from 'radium';` 
And wrap your export component in the "radium" component. 
`export default Radium(App);`

To use media queries we need to use `radium` again. Import:
`import {StyleRoot} from radium` 
Then add the style in your js code: 
```
const person = (props) => {
    const style = {
        '@media (min-width: 500px)': {
            width: '450px'
        }
    };
```
Don't forget to wrap your component with Radium and also your return in StyleRoot component.

#### CSS Modules
CSS Modules are a relatively new concept (you can dive super-deep into them here: https://github.com/css-modules/css-modules). With CSS modules, you can write normal CSS code and make sure, that it only applies to a given component.

It's not using magic for that, instead it'll simply automatically generate unique CSS class names for you. And by importing a JS object and assigning classes from there, you use these dynamically generated, unique names. So the imported JS object simply exposes some properties which hold the generated CSS class names as values.

Example:

In Post.css File

.Post {
    color: red;
}
In Post Component File

import classes from './Post.css';
 
const post = () => (
    <div className={classes.Post}>...</div>
);
Here, classes.Post  refers to an automatically generated Post  property on the imported classes  object. That property will in the end simply hold a value like Post__Post__ah5_1 .

So your .Post  class was automatically transformed to a different class (Post__Post__ah5_1 ) which is unique across the application. You also can't use it accidentally in other components because you don't know the generated string! You can only access it through the classes  object. And if you import the CSS file (in the same way) in another component, the classes  object there will hold a Post  property which yields a different (!) CSS class name. Hence it's scoped to a given component.

By the way, if you somehow also want to define a global (i.e. un-transformed) CSS class in such a .css  file, you can prefix the selector with :global .
```
Example:

:global .Post { ... } 
```
Now you can use className="Post"  anywhere in your app and receive that styling.

Using CSS Modules in create-react-app Projects: https://medium.com/nulogy/how-to-use-css-modules-with-create-react-app-9e44bec2b5c2
More information about CSS Modules: https://github.com/css-modules/css-modules

## Debugging React Apps
Use chrome or  Firefox for debugging (view sources, add breakpoints for logical errors)
For Error messages check the console. 

### The React Developer Tools
Add the extension to chrome. 

Error Boundaries: https://reactjs.org/docs/error-boundaries.html
Chrome Devtool Debugging: https://developers.google.com/web/tools/chrome-devtools/javascript/

## Diving Deeper into Components and React Internals

### Comparing Stateless and Stateful Components
 
Stateful components: Those that manage state
Presentational components: Those that don't manage state and they only use props to communicate with those components that do manage state.

### Class-Based vs Functional Components
Class-Based
1. Class XY extends Component
2. Access to State
3. Lifecycle Hooks
4. Access State and Props via "this" : Since these two are properties of the component class.

Functional
1. const xY = props => {...}
2. Access to State (useState())
3. Lifecycle Hooks (NOT SUPPORTED)
4. Access Props via "props" like an argument: so we don't need to use "this"
   
So when to use what? 
1. If we are in a react project that doesn't use React Hooks and we want to manage state or we need lifecycle hooks -> Use class-based approach.
2. If we use React Hooks then it's a bit less simple: 
   1. Better to keep both, stateful and presentational components. 

### Component Lifecycle
They are only available in Class-Based Components. 
Component Lifecycle - Creation
1. constructor() - Used for basic initialisation work (e.g setting an initial state) (DONT CAUSE SIDE EFFECTS)
2. getDerivedStateFromProps(props,state) - Sync state (DONT CAUSE SIDE EFFECTS).
3. render() - method for rendering JSX. (prepare and structure your jsx code)
4. componentDidMount() - We can cause side effects here (DONT UPDATE STATE)

Component Lifecycle - Update (For props changes)
1. getDerivedStateFromProps(props,state) : Sync state to props, don't cause side effects
2. shouldComponentUpdate(nextProps,nextState): It allows you to cancel the updating process. So here decide whether to or not continue rendering/evaluating component. (Don't cause side effects).
3. render() - prepare and structure your jsx code
4. Update child component props
5. getSnapshotBeforeUpdate(prevProps,prevState): Last minute DOM ops (e.g getting user's scroll position) (Don't cause side effects)
6. componentDidUpdate(): (cause side effects but don't update state)

#### How to use hooks in functional components?
Use `useEffect()`

```
useEffect(() => {
      console.log('[cockpit.js] useEffect');
      setTimeout(()=> {
        alert('Saved data to cloud');
      },1000);
    },[props.persons]); //This will only get called if props.persons changes
```
Note: `useEffect()` By default, effects run after every completed render, but you can choose to fire them only when certain values have changed.

### Setting the state correctly 
Update the state when we depend on an old state: 
```
this.setState((prevState,props) => {
        return {
          persons: persons,
          changeCounter: prevState.changeCounter + 1,
        }
      });
```

### Using PropTypes
Using an external package we can return errors if the developer used the wrong props (good for team projects). 

Install the package `npm install --save prop-types`.
Import `prop-types`: `Import PropTypes from 'prop-types`

Then create an object that will hold all propTypes:
```
Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    change: PropTypes.func,
};
```
If a dev uses state giving the wrong type they will get an error in the console.

### Using Refs
We can use `ref` which is a special property of React like `key`. We can set this on any JSX element. 
1. First Method of using ref:
```
<input
  key: "i2"
  ref={(inputEl)=> {this.inputElement = inputEl}}
>
</input>
```

Then call `focus()` in componentDidMount() on top of the class.
```
componentDidMount(){
  this.inputElement.focus();
}
```

This code makes sure focus is in the last input element from all the Person components.
https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement

2. Second Method of using ref:
This approach is newer - set inputElementRef into the class' constructor:
```
constructor(props){
  super(props);
  this.inputElementRef = React.createRef(); //This is a method from react to create a new ref.
}
```

Then in `componentDidMount` call focus on the current inputElementRef:
```
componentDidMount(){
  this.inputElementRef.current.focus();
}
```

Note: Don't forget to set ref in your JSX to be `this.inputElementRef` : `ref={this.inputElementRef}`.

Both approaches are okay to use. 

### Refs with React Hooks
In the previous section we saw how to use references in class components, what about functional Components?

The first approach we saw earlier can't be used in functional components but the 2nd method can. 

Example: Click the button in cockpit to hide/unhide persons whenever the entire page loads.

### Using the Context API to pass props
In order to pass props around components we need to pass props in all of the components until we reach the component we want. Sometimes though, 
props are not needed in some of the in-between components. In order to avoid following the props chain order until you reach the component you want it's better to use the Context API to access the props value in all the components you want. 


First we need to set up a folder called `context` that will hold all of the context files. Create a JS file called `auth-context.js`. 
We set up our context component function and export it as `authContext`. 
```
import React from 'react';

const authContext = React.createContext({
    authenticated: false,
    login: () => {},
});

export default authContext;
``` 

Then, just import this file in all the files you want to use it.

#### Context.Provider
Every Context Object comes with a Provider React component that allows consuming components to subscribe to context changes.

Accepts a `value` prop to be passed to consuming components that are descendets of this Provider. One Provider can be connected to many consumers. Providers can be nested to override values deeper within the tree.

IMPORTANT: All consumers that are descendants of a Provider will re-render whenever the Provider's `value` prop changes. The propagation from Provider to its descendant consumers is not subject to the `shouldComponentUpdate` method, so the consumer is updated even when an ancestor component bails out of the update. 

NOTE: Changes are determined by comparing the new and old values using the same algorithm as `Object.is`.

```
<MyContext.Provider value={/* some value */}>
```

#### Context.Consumer
A React component that subscribes to context changes. This lets you subscribe to a context within a *function component*.

IMPORTANT: Requires a `function as a child`. The function receives the current context value and returns a React node. The `value` argument passed to the function will be equal to the `value` prop of the closest Provider for this context above the tree. If there is no Provider for this context above, the `value` argument will be equal to the `defaultValue` tha was passed to createContext().

```
<MyContext.Consumer>
  {value => /* render something based on the context value */}
</MyContext.Consumer>
```

### Useful Resources
```
More on useEffect(): https://reactjs.org/docs/hooks-effect.html

State & Lifecycle: https://reactjs.org/docs/state-and-lifecycle.html

PropTypes: https://reactjs.org/docs/typechecking-with-proptypes.html

Higher Order Components: https://reactjs.org/docs/higher-order-components.html

Refs: https://reactjs.org/docs/refs-and-the-dom.html
```

