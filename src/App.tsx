import { useState } from 'react';
import CharacterRow from './components/CharacterRow';
import CurrentRound from './components/CurrentRound';
import NewCharacter from './components/NewCharacter';
import { Character } from './types/Character';

function App() {
  const [characters, setCharacters] = useState<Character[]>([]);
  function addCharacter() {
    setCharacters([
      ...characters,
      { roll: 0, isPlayer: false, name: '', initiativeBonus: 0 },
    ]);
  }
  function updateCharacter(
    index: number,
    roll: number,
    isPlayer: boolean,
    name: string,
    initiativeBonus: number
  ) {
    setCharacters([
      ...characters.slice(0, index),
      { roll, isPlayer, name, initiativeBonus },
      ...characters.slice(index + 1),
    ]);
  }
  function deleteCharacter(index: number) {
    console.log(index);
    setCharacters((characters) => [
      ...characters.slice(0, index),
      ...characters.slice(index + 1),
    ]);
  }

  const [currentRound, setCurrentRound] = useState<number>(1);
  function resetTracker() {
    setCurrentRound(1);
  }

  return (
    <div className="flex flex-col justify-center items-center min-h-screen space-y-10 dark:bg-slate-700 dark:text-white">
      <h1 className="text-2xl font-bold">Just Another Initiative Tracker</h1>
      <CurrentRound round={currentRound} resetRound={resetTracker} />
      {characters.map(({ name, roll, isPlayer, initiativeBonus }, index) => {
        return (
          <CharacterRow
            key={`character-${index}`}
            updateCharacter={(roll, isPlayer, name, initiativeBonus) =>
              updateCharacter(index, roll, isPlayer, name, initiativeBonus)
            }
            name={name}
            roll={roll}
            isPlayer={isPlayer}
            initiativeBonus={initiativeBonus}
            deleteRow={() => deleteCharacter(index)}
            // TODO: Add player tracker boolean here
          />
        );
      })}
      <NewCharacter
        addCharacter={() => {
          addCharacter();
        }}
      />
    </div>
  );
}

export default App;
