import React, {useState} from "react";

const Item = ({data, onDelete, index}) => {
    return (
        <div className="delete">
            <h4>{data}</h4>
            <button onClick={()=>onDelete(index)}>delete</button>
        </div>
    )
}

export default Item;
