import React from 'react';
import './App.css';
import Card from './Card'
import CardDetail from './CardDetail';

const App = () => {
  


  return (
    <div>
      <Card city='Den Haag'/>
      <Card city='Willemstad'/>
      <Card city='Antarctica' />
      {/* <CardDetail lat='52.079902' lon='4.315750' /> */}
    </div>
    
  )
   
}

export default App

