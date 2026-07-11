import Player from './components/Player.jsx';
import TimerChallenge from './components/TimerChallenge.jsx';
function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChallenge title="easy" timer={1}/>
        <TimerChallenge title="not easy" timer={10}/>
        <TimerChallenge title="Getting Tough" timer={20}/>
        <TimerChallenge title="Impossible" timer={30}/>
      </div>
    </>
  );
}

export default App;
