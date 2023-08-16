import React, { useState } from "react";
import "./ChangeTitle.css";

const ChangeTitle = () => {
  const [title, setTitle] = useState("");
  const [view, setView] = useState("");
  const [arr, setArr] = useState([]);

  const addCard = (e) => {
    e.preventDefault();
    const newCard = {
      title: title,
      view: view,
    };
    setArr([...arr, newCard]);
    setTitle("");
    setView("");
  };

  return (
    <>
      <form className="block" onSubmit={addCard}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <br/><br/>
        <input
          type="text"
          value={view}
          onChange={(e) => setView(e.target.value)}
        />
        <br/><br/>
        <button type="submit">Add</button>
      </form>

      <div>
        {arr.map((card, index) => (
          <div className="card" style={{ width: "18rem" }} key={index}>
            <img src="http://via.placeholder.com/640x360
" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{card.title}</h5>
              <p className="card-text">{card.view}</p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ChangeTitle;