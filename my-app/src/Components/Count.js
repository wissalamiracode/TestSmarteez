import React, { useState,useEffect } from 'react';
import "./Count.css";

const Count=()=>{
    const[number,setNumber]=useState(0);
    function increment(){
       setNumber(number+1);
       if (number>=0){
       document.getElementById('nbr').style.color='#0096FF';
       }
    }
    function decrement(){
        setNumber(number-1);
        if (number<=0){
        document.getElementById('nbr').style.color='#D2042D';
        }
    }
   
    return(
        <div className='counter'>
            <h1 id='nbr'> {number} </h1>
            <div className='buttons'>
            <button onClick={decrement} className='decrement button'>-</button>
            <button onClick={increment} className='increment button'>+</button>
            </div>
        </div>

    );
}
export default Count;