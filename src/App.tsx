import { useState } from 'react';
import CharacterRow from './components/CharacterRow';
import CurrentRound from './components/CurrentRound';

function App() {
  const [currentRound, setCurrentRound] = useState<number>(1);
  function resetTracker() {
    setCurrentRound(1);
  }

  return (
    <div className="flex flex-col justify-center items-center min-h-screen space-y-10 dark:bg-slate-700 dark:text-white">
      <h1 className="text-2xl font-bold">Just Another Initiative Tracker</h1>
      <CurrentRound round={currentRound} resetRound={resetTracker} />
      <CharacterRow
        index={0}
        changeInitiativeRoll={(index) =>
          console.log('Roll Change Function', index)
        }
        deleteRow={(index) => console.log(`Row Delete: ${index}`)}
      />
    </div>
  );
}

export default App;
