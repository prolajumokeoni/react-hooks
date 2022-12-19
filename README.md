## App Demo
[live demo](https://user-images.githubusercontent.com/69638013/208470065-4df545eb-303d-40bd-a1c3-b83c3211b3f6.mp4)

## INSTRUCTIONS ON HOW TO CLONE REPOSITORY:
- You can clone this repo by typing git clone https://github.com/prolajumokeoni/react-hooks on your terminal.
- Type cd `react-hooks` to access the project on the terminal
- Run `npm i` to install  and `npm start` to start the application

<br />
<br />
<br />

## QUESTION 1:  Explain the main hooks in React and give examples

Hooks were introduced in React 16.8, Hooks are functions that let you “hook into” React state and lifecycle features from functional components.

Hooks allow you to reuse stateful logic without changing your component hierarchy. 

Hooks can only be called inside a React Functional Component and  at the top level of a component

### The main Hooks in React are: 

- The State hook, useState, gives us the ability to encapsulate local state in a functional component. useState returns to us an array with two things in it: the current value of that state and a function to update that state. 




- useEffect, The Effect Hook, useEffect, adds the ability to perform side effects from a function component like fetching data directly, updating the Dom and setting times.  useEffect takes two arguments: callback function and array of dependency 



- The Usecontext Hook, useContext allows a component to access the context value of a particular context object. React Context is a way to manage state globally. Context is a way to pass data through the component tree without having to pass props down manually at every level.



 

## QUESTION 2: Walk me through useState, useEffect and UseContext

## To use useState in this example:
- [ ] import React, { useState } from 'react';
- [ ] Destructure the array count(current value) and setCount(set value)
- [ ] Update state in the function using the setCount value`

![Screenshot_564](https://user-images.githubusercontent.com/69638013/208421985-75082a14-7b1b-4782-9621-e0908e905427.png)

## To use useEffect in this example:
- [ ] import React, { useState, useEffect } from 'react';
- [ ] create a callback function
- [ ] set the state variable as a dependency of the hook.  

This will execute the code under the callback every time the value of our state variable changes. 

![Screenshot_565](https://user-images.githubusercontent.com/69638013/208421980-2a0c49dd-4d6f-40cf-8833-f063a557004e.png)

## To use useContext in this example: 
 
- [ ] import React, { useContext } from 'react';
- [ ] Create a  usecontext hook that can be called in a function (const ThemeContext = React.createContext(themes.light);)
- [ ] Call const theme = useContext(ThemeContext); in the ThemedButton function to use the theme properties`
 
In this example, ThemedButton is able to access the value of the MyContext context object by calling the useContext hook. This is useful when you have a component that needs to access a context value, but is several levels deep in the component tree and would otherwise have to pass the context value down through multiple props.


![Screenshot_566](https://user-images.githubusercontent.com/69638013/208421975-f85c0f4d-83cd-4589-abf8-3b34a5b25733.png)





## QUESTION 3: Explain how to build components in React
In React, a component is a piece of code that represents a part of a user interface.

Components let you split the UI into independent, reusable pieces, and think about each piece in isolation.  
Components are like JavaScript functions. They accept arbitrary inputs (called “props”) and return React elements describing what should appear on the screen.
 

Components come in two types, Class components and Functional components 

A class component must include the extends React.Component statement. This statement creates an inheritance to React.Component, and gives your component access to React.Component's functions.
The component also requires a render() method, this method returns HTML.


A Function component also returns HTML, and behaves much the same way as a Class component, but Function components can be written using much less code, are easier to understand,



- [ ] Create a directory called `components` in your `src` folder to house all component files
- [ ] In your component folder create a file called `Welcome.js` this is the component name in your `Welcome.js`
  - [ ] After you have created your component dont forget to import in your `App.js`
	
## write  the code below to create a functional or class based component
## Here's an example of a simple functional component in React:

```
function Welcome(props) {
  return <h1>Welcome</h1>;
}
```
## Here's an example of a simple classbased component in React:

```
class Welcome extends React.Component {
  render() {
    return <h1>Welcome</h1>;
  }
}
```



REFERENCE: [React Js Documentation](https://reactjs.org/)





