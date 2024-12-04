import React, {useState} from "react";
import {v4 as uuid} from 'uuid';
import Box from './Box';
import NewBoxForm from "./NewBoxForm";
 
const BoxList = () => {
    const [boxes, setBoxes] = useState([])

    const addBox = (newBox) => {
        setBoxes([...boxes, newBox]);
    };

    const removeBox = (id) => {
        setBoxes(boxes.filter((box) => box.id !== id));
    }

    return (
        <div>
            <NewBoxForm addBox={addBox} />
            <div>
            {boxes.map(({id, color, width, height}) => (
                <Box 
                key={uuid()}
                id={id} 
                color={color} 
                width={width} 
                height={height}
                removeBox={removeBox}/>
            ))}
            </div>
        </div>
    )
}

export default BoxList;
