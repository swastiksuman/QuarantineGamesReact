import React, { useState } from 'react';

const Square = (props) => {
    /*const [score, setScore] = useState(0);

    function updateScore(){
        console.log(score);
        setScore(prevScore=>prevScore+1)

    }*/
    return (       
        <div onClick={props.updateScore} className={props.moleId == props.id ? 'square mole' : 'square'}></div>
    )
}

export default Square;