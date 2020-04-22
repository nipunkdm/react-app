import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const products = [
    {name:"Photoshop",price:"$60.00"},
    {name:"Illustrator",price:"$50.00"},
    {name:"PDF Reader",price:"$5"}
  ]

  return (
    <div className="App">
      <header className="App-header">
        <Counter></Counter>
        <User></User>
        {products.map(pd=><Product element={pd}></Product>)}
      </header>
    </div>
  );
}

function Counter(){
  const [count, setCount] = useState(0);
  //const handalerIncrease = () =>setCount(count + 1);

  return(
    <div>
        <h1>Count: {count}</h1>
        <button onClick={() =>setCount(count + 1)}>Increase</button>
    </div>
  )
}


function User(){
  const [user, setUsers] = useState([])
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=> res.json())
    .then(data => setUsers(data));
  }, [])
  return(
    <div>
      <h3>Dynamic User: {user.length}</h3>
      <ul>
         {
           user.map(user=><li>{user.name}</li>)
         }
      </ul>
    </div>
  )
}

function Product(props){
  const productStyle = {
    border:'1px solid gray',
    borderRadius:'5px',
    backgroundColor:'lightgray',
    height:'200px',
    width:'200px',
    float:'left'
  }
 const {name, price} = props.element;
  return(
    <div style={productStyle}>
      <h3>{name}</h3>
      <h5>{price}</h5>
      <button>Buy Now</button>
    </div>
  )
}

export default App;
