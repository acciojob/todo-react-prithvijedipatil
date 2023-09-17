import React, { useState } from "react";
import Item from "./Item";
import "./../styles/App.css";

const App = () => {
  const [items, setItems] = useState([]);

  const addNew = function (e) {
    e.preventDefault();
    setItems([...items, e.target.item.value]);
    console.log("items", items);
  };

  const deleteItem = function (i) {
    const updatedItems = [...items];
    updatedItems.splice(i, 1);
    setItems(updatedItems);
  };

  return (
    <div className="poora">
      <div className="container">
        <form className="todoForm" onSubmit={(e) => addNew(e)}>
          <input
            name="item"
            type="text"
            placeholder="Please add new item here"
          />
          <button type="submit">add</button>
        </form>

        {items.map((item, i) => {
          return <Item data={item} key={i} index={i} onDelete={deleteItem} />;
        })}
      </div>
    </div>
  );
};

export default App;
