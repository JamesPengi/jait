import { useEffect, useState } from 'react';
import { useAutoAnimate } from '@formkit/auto-animate/react';
import CharacterRow from './components/CharacterRow';
import CurrentRound from './components/CurrentRound';
import NewCharacter from './components/NewCharacter';
import { Character } from './types/Character';

function App() {
  const [parent] = useAutoAnimate({
    duration: 115,
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
    setCharacters([
      ...characters.slice(0, index),
      ...characters.slice(index + 1),
    ]);
  }

  const [currentRound, setCurrentRound] = useState<number>(1);
  function resetTracker() {
    setCurrentRound(1);
  }

  const [autoSort, setAutoSort] = useState<boolean>(false);
  function rollAllInitiatives() {
    if (autoSort) {
      setCharacters((characters) =>
        characters
          .map((character) => {
            return {
              ...character,
              roll: Math.floor(Math.random() * 20) + character.initiativeBonus,
            };
          })
          .sort((a, b) => b.roll - a.roll)
      );
    } else {
      setCharacters((characters) =>
        characters.map((character) => {
          return {
            ...character,
            roll: Math.floor(Math.random() * 20) + character.initiativeBonus,
          };
        })
      );
    }
  }

  function sortCharacters() {
    setCharacters([...characters.sort((a, b) => b.roll - a.roll)]);
  }

  return (
    <div className="flex flex-col min-h-screen py-5 justify-center items-center dark:bg-slate-700 dark:text-white">
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
        <div className="pl-10 space-y-5">
          <div className="flex flex-row space-x-5">
            <button
              className="px-4 py-2 rounded text-2xl dark:bg-white dark:text-black font-bold"
              // TODO: Go to next player when clicked
            >
              Next
            </button>
            <button
              className="px-4 py-2 rounded text-2xl dark:bg-white dark:text-black font-bold"
              onClick={rollAllInitiatives}
            >
              Roll
            </button>
            <button
              className="px-4 py-2 rounded text-2xl dark:bg-white dark:text-black font-bold"
              onClick={sortCharacters}
            >
              Sort
            </button>
          </div>
          <div className="space-y-2">
            <div className="space-x-10">
              <span className="font-bold">Auto Order Characters on Roll</span>
              <input
                type="checkbox"
                checked={autoSort}
                onChange={(e) => setAutoSort(e.target.checked)}
              />
            </div>
            {/* TODO: Remove NPCs from the character array */}
            <div className="space-x-3">
              <span className="font-bold">
                Clear non-PCs on Encounter Reset
              </span>
              <input type="checkbox" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
