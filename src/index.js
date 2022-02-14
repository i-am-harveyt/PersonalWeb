import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';

function Page(){
  return(
    <h1>Hello React</h1>
  )
}

ReactDOM.render(
  <Page />,
  document.getElementById('root')
);
