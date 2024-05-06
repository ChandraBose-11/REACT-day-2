import React from 'react';
import "../Component B/CompB.css"
const CompC = ({obj}) => {
    const handlesubmit=()=>{
        alert("iam chandru thank you")
    }
    return (
        <>
        <h1 className='header'>hello world</h1>  
        <h2>Name:{obj.name}</h2>
        <h2>Age:{obj.age}</h2>
        <button onClick={handlesubmit}>click to know</button>
        </>
    );
};

export default CompC;