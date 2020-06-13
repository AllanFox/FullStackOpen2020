import React from 'react';
import ReactDOM from 'react-dom';

let Header = (props) => {
  return(
    <h1>{props.course}</h1>
  )
}

let Part = (props) => {
  return(
    <p>
      {props.part} {props.exercises}
    </p>
  )
}

let Content = () => {
  return(
    <>
      <Part
        part='Fundamentals of React'
        exercises={10}
      />
      <Part 
        part='Using props to pass data'
        exercises={7}
      />
      <Part 
        part='State of a component'
        exercises={14}
      />
    </>
  )
}

let Total = (props) => {
  return(
    <p>Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}</p>
  )
}


const App = () => {
  return(
    <>
      <Header course="Half Stack application development"/>
      <Content />
      <Total exercises1={10} exercises2={7} exercises3={14}/>
    </>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
