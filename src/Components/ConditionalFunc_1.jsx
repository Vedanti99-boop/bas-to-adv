import React from "react";
import { useState } from 'react'

import "./ConditionalFunc.css";

const ConditionalFunc_1 = ({ titleblock, desc, verified }) => {
  //   const title1 = <h5 className="card-title">{title}</h5>;

  const [display,setDisplay]=useState(true)
 
  const toggle=()=>{
    setDisplay(!display)
  }


  const [title,setTitle]=useState("ved")
  const [query,setQuery]=useState()

  const change=()=>{
      setTitle(query)
  }


  return (

    <>

    <div className="section1 " >
    <input type="text" value={query} onChange={(e)=>setQuery(e.target.value)}/>
    <h2>{title}</h2>
    <button onClick={change}>change</button>
</div>


    <div onClick={toggle} className="section2">
      {display 
      ?
      <div className="card mt-5 pb-3" style={{ width: "18rem" }}>
        <img
          src="https://picsum.photos/1000/700"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          {/* {verified ? <h5 className="card-title">{title}✅</h5>:<h5 className="card-title">{title}</h5>} */}
          <h5 className="card-title">
            {titleblock}
            {verified ? "✅" : null}
          </h5>

          {/* <h5 className="card-title">{title}{verified && "✅"}</h5>only the thing is if verified is false(boolean value)  */}
          {/* it wont print anything but if it has some value other than boolean than it will print that value instead true you can write 1 */}

          <p className="card-text">{desc}</p>
        </div>
      </div> 
      :
       <div><h3>changed</h3></div>}
    </div>
    </>
  );
};

export default ConditionalFunc_1;
