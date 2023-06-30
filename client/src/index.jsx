import axios from "axios";
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import List from "./components/List.jsx";
import '../dist/style.css'
import Form from "./components/Form.jsx";

const App = () => {
  const [data, setData] = useState([]);
  const [view, setView] = useState(false);
  const [item , setItem] = useState({})

  const changeView = (option) => {
    setView(option);
  };

  const renderView = () => {
    if (view === false) {
      return <List data={data} changeView={changeView} setItem={setItem}/>;
    } else {
      return <Form changeView={changeView} item={item} data={data}/>;
    }
  };

  const selectAll = () => {
    axios
      .get("http://localhost:3000/api/person")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    selectAll();
  }, []);

  return (
    <div>
      <div className="hero">
        <nav>
          <h1
            className="logo"
            onClick={() => {
              changeView(false);
            }}
          >
            PARADISE <span> GYM</span>
          </h1>

          <ul>
            <li
              onClick={() => {
                changeView(false);
              }}
            >
              <a href="#">Home</a>
            </li>
            <li onClick={() => changeView(true)}>
              <a href="#">Form</a>
            </li>
            
            <li>
              <a href="footer">Contact Us</a>
            </li>
          </ul>
        </nav>
      </div>
      {renderView()}
    </div>

    
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
