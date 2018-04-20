import React from "react";

 const user = (props) =>{
   return( <li>
        <span>{props.age} {props.children}   </span> 
        <button onClick ={props.delEvent}> Delete </button>
        </li>
   )
}
export default user; 