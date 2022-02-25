import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './Components/Header'

function Page(){
  return(
    <div>
      <Header />
    </div>
  )
}

ReactDOM.render(
  <Page />,
  document.getElementById('root')
);
