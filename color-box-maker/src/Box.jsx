import React, {useState} from "react";

const Box = ({id, color, width, height, removeBox}) => {
    const handleRemove = () => {
        removeBox(id)
    }
    return (
        <div>
            <div
            style={{
                backgroundColor: color,
                width: `${width}px`,
                height: `${height}px`,
            }}>
            </div>
            <button onClick={handleRemove}>Remove</button>
        </div>

    )
}

export default Box;
