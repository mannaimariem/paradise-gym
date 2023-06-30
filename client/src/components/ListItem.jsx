import axios from "axios";
import React from "react";

const ListItem = (props) => {
  const removeClient = (id) => {
    axios
      .delete(`http://localhost:3000/api/person/delete/${id}`)
      .then((res) => {
        console.log(res.props.data);
      })
      .catch((error) => {
        console.log(error);
      });
    window.location.reload();
  };

  return (
    <div>
      <h1>{props.ele.name}</h1>
      <img src={props.ele.ImageUrl} />
      <h3>{props.ele.Number}</h3>
      <p>{props.ele.gender}</p>
      <p>{props.ele.date}</p>
      <p>{props.ele._id}</p>

      <button
        onClick={() => {
{        console.log(props.ele._id)
}          removeClient(props.ele._id);
        }}
      >
        Delete
      </button>
      <button
        onClick={() => {
          props.setItem(props.ele)
          props.changeView(true);
        }}
      >
        Edit
      </button>
    </div>
  );
};

export default ListItem;
