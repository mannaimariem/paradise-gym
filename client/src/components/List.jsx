import React from "react";
import ListItem from "./ListItem.jsx";

const List = ({data , changeView , setItem}) => (
  <div>
    <h4> List Component </h4>
    
    {data.map((ele, index) => (
      <div key={index}>
        <ListItem ele={ele} changeView={changeView} setItem={setItem}/>
      </div>
    ))}
  </div>
);

export default List;
