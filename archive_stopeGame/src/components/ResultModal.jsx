import { forwardRef, useImperativeHandle, useRef } from 'react';

const ResultModal = forwardRef(function ({ timer, timeRemaining ,onReset }, ref) {
  const dialog = useRef();
  const secondsFormatter = (timeRemaining / 1000).toFixed(2);
  const score = Math.round(((1- timeRemaining / (timer * 1000)) * 100));

  const userLost = timeRemaining <= 0;


  useImperativeHandle(ref, () => {
      return {
            open(){
                  dialog.current.showModal();
            }
      }
  })
  return (
    <dialog ref={dialog} className="result-modal">
      {userLost && <h2>You Lost</h2>}
      {!userLost &&  <h2>Your score: {score}</h2>}
      <p>
        The target time was <strong>{timer} seconds</strong>
      </p>
      <p>
        Player stops the timer left at <strong>{secondsFormatter} Seconds.</strong>
      </p>
      <form action="dialog" onSubmit={onReset}>
        <button>Close</button>
      </form>
    </dialog>
  );
});

export default ResultModal;

