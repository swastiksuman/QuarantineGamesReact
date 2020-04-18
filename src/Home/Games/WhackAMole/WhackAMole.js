import React, {useState, useEffect} from 'react';
import './WhackAMole.css';
import Square from './Square/Square';
import Button from 'react-bootstrap/Button'
import Badge from 'react-bootstrap/Badge'

const WhackAMole = () => {
    const [score, setScore] = useState(0);
    const [moleId, setMoleId] = useState("0");
    const [timer, setTimer] = useState(60);
    function startGame(){
        var myTimer = timer;
        var intervalId = setInterval(()=> {
            if(myTimer >= 0 ){
                myTimer = myTimer - 0.5
            setTimer(myTimer)
            setMoleId(Math.floor(Math.random() * 9) + 1  )
            }else{
                console.log(timer)
                clearInterval(intervalId)
                return
            }
        }, 500)
    }

    useEffect(()=>{
        
    },[])

    function updateScore(fromId){
        if(fromId == moleId){
            setScore((previousScore)=>previousScore + 1)
        }
    }
    return (
        <div>
        <Badge variant="primary">Score: {score}</Badge>
        <Badge variant="primary">Timer: {Math.ceil(timer)}</Badge>
        <div class="grid">    
        <Square id="1" moleId={moleId} updateScore={() => updateScore('1')}></Square>
        <Square id="2" moleId={moleId} updateScore={() => updateScore('2')}></Square>
        <Square id="3" moleId={moleId} updateScore={() => updateScore('3')}></Square>
        <Square id="4" moleId={moleId} updateScore={() => updateScore('4')}></Square>
        <Square id="5" moleId={moleId} updateScore={() => updateScore('5')}></Square>
        <Square id="6" moleId={moleId} updateScore={() => updateScore('6')}></Square>
        <Square id="7" moleId={moleId} updateScore={() => updateScore('7')}></Square>
        <Square id="8" moleId={moleId} updateScore={() => updateScore('8')}></Square>
        <Square id="9" moleId={moleId} updateScore={() => updateScore('9')}></Square>
      </div>
    
      <Button onClick={startGame} variant="primary">Start</Button>
        
      </div>
    )
}

export default WhackAMole;