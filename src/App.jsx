import React from 'react';
import CompA from './Components/Component A/CompA';
import CompB from './Components/Component B/CompB';
import CompC from './Components/Component C/CompC';
// import CompE from './Components/Component E/CompE';
import Compj from './Components/CompJ/Compj';
//import part

const App = () => {
  // js part
  const a=10;
  const arr=[1,2,3,4,5];
  const obj={name:"chandru",age:5};
  const arrobj=[
    {id:1,name:"chandru",age:3},
    {id:2,name:"bose",age:4},
    {id:3,name:"doe",age:5},
    {id:4,name:"Amutha",age:6},
  ]
  return (
   // jsx part[html,css,js]
    <>
      <h1>App components</h1>
      < CompA a={a} />
      <CompB  arr={arr}/>
      <CompC obj={obj}/>
      <Compj arrobj={arrobj} />
      </>

  );
};
//export part

export default App;