import React, {useEffect, useState, useRef} from "react";

let initialRun = true;
let timerBtn = false;
let alarmBtn = false

const SecondsCounter = () => {

   
    

    const [seg, setSeg] = useState(0);
    const inputRef = useRef(null);
    const inputRef2 = useRef(null)
    const [input, setInput] = useState(input)
    const [input2, setInput2] = useState(input2)
    let time;


    const restartBtn = ()=> {
        timerBtn = false
        setSeg(0)
    } 
    const resumeBtn = () => initialRun = true
    const stopBtn = () => initialRun = false

    

    useEffect( ()=>{

        time = setInterval(()=>{
           
            
            if(initialRun === true && timerBtn === false ) {setSeg(seg+1)}
           
            if(timerBtn === true && initialRun === true){ 
                
                if(seg === 0 ){
                    setSeg(0)
                    alert("Your time's up")
                    timerBtn = false;
                    initialRun = true;
                   
            } else{setSeg(seg-1)}}

               
               
            if(input2 == seg && alarmBtn === true){
                alert("Your time's up") 
                 alarmBtn = false
            }

            if(input2 < seg && alarmBtn === true){
                alert("Your time is too low, insert a higher digit")
                alarmBtn = false  

            }

                
            setInput(inputRef.current.value)
            
            
        },1000)

        return ()=> clearInterval(time)
    });

      
    function onClickFunction() {      
        if(input <= 99999999){
         alarmBtn = false;
         timerBtn = true
        setSeg(Number(input))}
 
        else{alert(`${input} is out of range, please insert another value `)}
       }
 
       function onClickFunction2() {     
         alarmBtn = true;
         setInput2(inputRef2.current.value);
    }
       
      
     return(
              
              <div className="counterContainer ">
             <div className="secondsContainer text-light rounded-5 rounded-top-0">
             
                 <h1 className="seconds ">
                 {seg}
                 </h1>
                
            </div>

            <div className="btnContainer ">
                <div>

            <button className="btn btn-danger m-2 p-2" onClick={stopBtn}><i class="fas fa-times"></i></button>

            <button onClick={resumeBtn} className="btn btn-success p-2"><i class="fas fa-play"></i></button>

            <button onClick={restartBtn} className="btn btn-primary m-2 p-2"><i class="fas fa-undo"></i></button>

            </div>

            <input ref={inputRef} min={0} max={99999999} type="number" placeholder="Enter the seconds" className="inputValue text-center p-2 m-1 rounded " />

            <button onClick={onClickFunction} className="btn btn-warning valueBtn" type="submit">TIMER</button>

            </div>
            
            <input ref={inputRef2} min={1} max={99999999} type="number" placeholder="Enter the seconds" className="inputValue text-center p-2 m-1 rounded " />

            <button onClick={onClickFunction2} className="btn btn-warning valueBtn" type="submit">ALARM</button>
     
        </div>
        

    );
}

export default SecondsCounter; 