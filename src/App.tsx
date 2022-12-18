import { useState } from 'react';
import { useAutoAnimate } from '@formkit/auto-animate/react';
import CharacterRow from './components/CharacterRow';
import CurrentRound from './components/CurrentRound';
import NewCharacter from './components/NewCharacter';
import { Character } from './types/Character';

function App() {
  const [parent] = useAutoAnimate({
    duration: 175,
  });

  const [characters, setCharacters] = useState<Character[]>([]);
  function addCharacter() {
    setCharacters([
      ...characters,
      {
        roll: 0,
        isPlayer: false,
        name: '',
        initiativeBonus: 0,
        isTurn: false,
        color: 'bg-gray-400',
      },
    ]);
  }
  function updateCharacter(
    index: number,
    roll: number,
    isPlayer: boolean,
    name: string,
    initiativeBonus: number,
    color: string
  ) {
    setCharacters([
      ...characters.slice(0, index),
      {
        roll,
        isPlayer,
        name,
        initiativeBonus,
        isTurn: characters[index].isTurn,
        color: color,
      },
      ...characters.slice(index + 1),
    ]);
  }
  function deleteCharacter(index: number) {
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
    <div className="flex flex-col min-h-screen justify-center items-center dark:bg-slate-700 dark:text-white">
      <div className="flex flex-col space-y-7">
        <h1 className="text-4xl font-bold text-center pb-5">
          Just Another Initiative Tracker
        </h1>
        <CurrentRound round={currentRound} resetRound={resetTracker} />
        {/* @ts-ignore-error */}
        <div ref={parent} className="space-y-7">
          {characters.map(
            (
              { name, roll, isPlayer, initiativeBonus, isTurn, color },
              index
            ) => {
              return (
                <CharacterRow
                  key={`character-${index}`}
                  updateCharacter={(
                    roll,
                    isPlayer,
                    name,
                    initiativeBonus,
                    color
                  ) =>
                    updateCharacter(
                      index,
                      roll,
                      isPlayer,
                      name,
                      initiativeBonus,
                      color
                    )
                  }
                  name={name}
                  roll={roll}
                  isPlayer={isPlayer}
                  initiativeBonus={initiativeBonus}
                  color={color}
                  deleteRow={() => deleteCharacter(index)}
                  isPlayerTurn={isTurn}
                />
              );
            }
          )}
        </div>
        <NewCharacter
          addCharacter={() => {
            addCharacter();
          }}
        />
      </div>
    </div>
  );
}

export default App;
