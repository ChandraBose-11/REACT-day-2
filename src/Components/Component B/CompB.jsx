import React from 'react';
// import './CompB.css';
import "../Component A/CompA.css";
const CompB = ({arr}) => {
    return (
        <>
        
     <h1 className='head'>hello</h1>
     {arr.map((element,index)=>{
            return(
                <>
                <div key={index}>
                <h1>{element}</h1>
                </div>
                </>
            )
        })}
        </>
    );
};

export default CompB;