import {useState} from "react";
import Die from "./Die";

const RollDice = () => {
    const [die1, setDie1] = useState('one');
    const [die2, setDie2] = useState('one');
    const sides = ['one', 'two', 'three', 'four', 'five', 'six'];


   


const roll = () => {
    const newDie1 = sides[Math.floor(Math.random() * sides.length)];
    const newDie2 = sides[Math.floor(Math.random() * sides.length)];
    setDie1(newDie1);
    setDie2(newDie2);

    
}
return(
    <div>
        <Die face={die1}/>
        <Die face={die2}/>
        <div>
            <button onClick={roll}>Role Dice!</button>
        </div>
    </div>
)}

export default RollDice;  
