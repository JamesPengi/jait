import { useEffect, useState } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import CharacterRow from "./components/CharacterRow";
import CurrentRound from "./components/CurrentRound";
import { DEFAULT_CHARACTER, Character } from "./types/Character";

function App() {
  const [parent] = useAutoAnimate({ duration: 115 });

  const [characters, setCharacters] = useState<Character[]>([
    DEFAULT_CHARACTER,
  ]);
  function addCharacter() {
    setCharacters([...characters, DEFAULT_CHARACTER]);
  }
  function updateCharacter(
    index: number,
    roll: number,
    isPlayer: boolean,
    name: string,
    initiativeBonus: number,
    color: string
  ) {
    setCharacters(
      [
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
      ].sort((a, b) => b.roll - a.roll)
    );
  }
  function deleteCharacter(index: number) {
    if (characters.length === 1) {
      setCharacters([DEFAULT_CHARACTER]);
    } else {
      setCharacters([
        ...characters.slice(0, index),
        ...characters.slice(index + 1),
      ]);
    }
  }

  const [didTrackerStart, setDidTrackerStart] = useState<boolean>(false);
  useEffect(() => {
    if (didTrackerStart) {
      setCharacters([
        { ...characters[0], isTurn: true },
        ...characters.slice(1, characters.length),
      ]);
      setCurrentPlayer(0);
    } else {
      setCharacters((characters) => {
        return characters.map((character) => {
          return {
            ...character,
            isTurn: false,
          };
        });
      });
    }
  }, [didTrackerStart]);

  const [currentRound, setCurrentRound] = useState<number>(1);
  const [clearNPCs, setClearNPCs] = useState<boolean>(false);
  function resetTracker() {
    setCurrentRound(1);
    setDidTrackerStart(false);
    if (clearNPCs) {
      setCharacters((characters) => {
        return characters.filter((character) => character.isPlayer);
      });
    }
  }

  function advanceTracker() {
    if (currentPlayer + 1 === characters.length) {
      setCurrentRound(currentRound + 1);
      setCurrentPlayer(0);
    } else {
      setCurrentPlayer(currentPlayer + 1);
    }
  }

  const [currentPlayer, setCurrentPlayer] = useState<number>(0);
  useEffect(() => {
    if (didTrackerStart) {
      setCharacters((characters) => {
        return characters.map((character, index) => {
          if (index === currentPlayer) {
            return { ...character, isTurn: true };
          } else {
            return { ...character, isTurn: false };
          }
        });
      });
    }
  }, [currentPlayer]);

  function rollAllInitiatives() {
    setCharacters((characters) =>
      characters
        .map((character) => {
          return {
            ...character,
            roll: Math.floor(Math.random() * 20) + character.initiativeBonus,
          };
        })
        .filter(({ name }) => name !== "")
        .sort((a, b) => b.roll - a.roll)
    );
  }

  return (
    // TODO: Change background to player's color
    <div className="flex min-h-screen flex-col items-center justify-center py-5 dark:bg-slate-700 dark:text-white">
      {/* TODO: Add mobile support */}
      <div className="flex min-w-[50rem] flex-col space-y-7">
        <h1 className="pb-5 text-center text-4xl font-bold">
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
                  addCharacter={addCharacter}
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
                  isFirst={characters.length === 1 && index === 0}
                />
              );
            }
          )}
        </div>
        <div className="space-y-5 pl-12">
          <div className="flex flex-row space-x-5">
            <button
              className="rounded bg-slate-800 px-4 py-2 text-2xl font-bold text-white dark:bg-white dark:text-black"
              onClick={addCharacter}
            >
              Add
            </button>
            <button
              className="rounded bg-slate-800 px-4 py-2 text-2xl font-bold text-white dark:bg-white dark:text-black"
              onClick={rollAllInitiatives}
            >
              Roll All
            </button>
            <button
              className="rounded bg-slate-800 px-4 py-2 text-2xl font-bold text-white dark:bg-white dark:text-black"
              onClick={() =>
                didTrackerStart ? advanceTracker() : setDidTrackerStart(true)
              }
            >
              {didTrackerStart ? "Next" : "Start"}
            </button>
          </div>
          <div className="space-y-2">
            <div className="space-x-3">
              <span className="font-bold">
                Clear non-PCs on Encounter Reset
              </span>
              <input
                type="checkbox"
                checked={clearNPCs}
                onChange={(e) => setClearNPCs(e.target.checked)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
