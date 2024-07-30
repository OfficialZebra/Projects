import {useState} from "react"


const ColorPicker = () => {
const [selectedColors, setSelectedColors] = useState([]);
const [newColor, setNewColor] = useState('#000000');


const handleColorChange = (event) => {
    setSelectedColors([...selectedColors, newColor]);
    setNewColor(event.target.value);
};

const renderPickedColors = selectedColors.map((color, index) => (
    <div key={index} style={{
        backgroundColor: color,
        width: '100px',
        height: '100px', 
        marginLeft: '5px',
    }}
    > {color}</div>
));

const resetColors = () => {
    setSelectedColors([]);
};

return(
    <div>
        Selected Colors: 
        <div style={{display: 'flex', marginBottom: '10px'}}>Picked Coloros Will Go Here {renderPickedColors}</div>
    
    <div>
        <input type="color" value={newColor} onChange={handleColorChange}/>
        <br />
        <button onClick={handleColorChange}>Add Color</button>
        <button onClick={resetColors}>Reset button</button>
    </div>
    </div>
)



}

export default ColorPicker;