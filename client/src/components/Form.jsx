import axios from 'axios';
import React, { useState } from 'react'

const Form = (props) => {

    const [name, setName] = useState("");
    const [ImageUrl, setImageUrl] = useState("");
    const [Number, setNumber] = useState("");
    const [gender, setGender] = useState("");


    const postClient = () => {
        const obj = {
          name: name,
          ImageUrl: ImageUrl,
          Number: Number,
          gender: gender,
        };
        axios
          .post("http://127.0.0.1:3000/api/person/post", obj)
          .then((response) => {
            console.log(response.data);
            window.location.reload();
          })
          .catch((error) => {
            console.log(error);
          });
      };

      const update = (ID) => {
        axios.put(`http://127.0.0.1:3000/api/person/update/${ID}`, {
          name: name,
          ImageUrl: ImageUrl,
          Number: Number,
          gender: gender,
        })
        .then((response) => {
            console.log(response.data)
            window.location.reload()
            
        })
        .catch((error) => {
            console.log(error);
        })
      };



  return (
    <div>
    <input placeholder='Enter the Name' onChange={(e) => {
        setName(e.target.value)
    }}/>
     <input placeholder='Enter the ImageUrl' onChange={(e) => {
        setImageUrl(e.target.value)
    }}/>
       <input placeholder='Enter the number' type='number' onChange={(e) => {
        setNumber(e.target.value)
    }}/>
     <input placeholder='Enter the gender' onChange={(e) => {
        setGender(e.target.value)
    }}/>
    <button onClick={() => {postClient()}}>post</button>
    <button onClick={() => {update(props.item._id)}}>update</button>
    </div>
  )
}

export default Form
