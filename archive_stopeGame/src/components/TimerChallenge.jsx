import { useState, useRef } from 'react';
import ResultModal from './ResultModal.jsx';

function TimerChallenge({ title, timer }) {
  let timerRef = useRef(null);
  let dialog = useRef(null);

  const [timeRemaining, setTimeRemaining] = useState(timer * 1000);

  const timerIsActive = timeRemaining > 0 && timeRemaining < timer * 1000;

  if(timeRemaining <= 0){
    clearInterval(timerRef.current);
    dialog.current.open();
  }
  
  function handleStart(){
    timerRef.current = setInterval(() => {
      setTimeRemaining(prevTimeReamining => prevTimeReamining - 10);
    }, 10);
  }

  function handleStop(){
    clearInterval(timerRef.current);
    dialog.current.open();
  }

  function handleRestart(){
    setTimeRemaining(timer * 1000);
  }

  return (
    <>
      <ResultModal ref={dialog} timer={timer} timeRemaining={timeRemaining} onReset={handleRestart} /> 
      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {timer} second{timer > 1 ? 's' : ''}
        </p>
        <p>
          <button onClick={timerIsActive ? handleStop : handleStart}>
            {timerIsActive ? 'Stop ' : 'Start '}Challenge
          </button>
        </p>
        <p className={timerIsActive ? 'active' : ''}>
          {timerIsActive ? 'Timer is running...' : 'Timer is inactive'}
        </p>
      </section>
    </>
  );
}

export default TimerChallenge;
