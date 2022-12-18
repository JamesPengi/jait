import {
  DiceIcon,
  NPCShieldIcon,
  PaintCanIcon,
  PCShieldIcon,
  PlayerTrackerIcon,
  TrashIcon,
} from '../utils/Icons';
import { useEffect } from 'react';
import { getRandomColor } from '../utils/Colors';

type Props = {
  name: string;
  roll: number;
  isPlayer: boolean;
  initiativeBonus: number;
  color: string;
  updateCharacter: (
    roll: number,
    isPlayer: boolean,
    name: string,
    initiativeBonus: number,
    color: string
  ) => void;
  deleteRow: () => void;
  isPlayerTurn?: boolean;
};

function CharacterRow({
  name,
  roll,
  isPlayer,
  initiativeBonus,
  isPlayerTurn,
  color,
  updateCharacter,
  deleteRow,
}: Props) {
  useEffect(() => {
    updateCharacter(
      roll,
      isPlayer,
      name,
      initiativeBonus,
      getRandomColor(color)
    );
  }, []);

  function changeColor() {
    updateCharacter(
      roll,
      isPlayer,
      name,
      initiativeBonus,
      getRandomColor(color)
    );
  }

  return (
    <div className="flex flex-row space-x-3">
      <div className="flex flex-row justify-center items-center w-7">
        {isPlayerTurn && <PlayerTrackerIcon className="h-7 w-7" />}
      </div>
      <div className="flex flex-row space-x-3">
        <div
          className={`flex flex-row space-x-2 rounded-sm ${color} text-black px-5 py-2`}
        >
          <input
            type="number"
            value={roll}
            onChange={(e) =>
              updateCharacter(
                Number(e.target.value),
                isPlayer,
                name,
                initiativeBonus,
                color
              )
            }
            className="bg-transparent font-bold text-2xl text-center w-12"
          />
          <button
            onClick={() => {
              updateCharacter(
                Math.floor(Math.random() * 20) + initiativeBonus,
                isPlayer,
                name,
                initiativeBonus,
                color
              );
            }}
          >
            <DiceIcon className="h-9 w-9" />
          </button>
        </div>
        <button
          className={`flex flex-col items-center justify-center p-2 rounded-sm ${color} text-black transition-colors`}
          onClick={() =>
            updateCharacter(roll, !isPlayer, name, initiativeBonus, color)
          }
        >
          {isPlayer ? (
            <PCShieldIcon className="h-7 w-7" />
          ) : (
            <NPCShieldIcon className="h-7 w-7" />
          )}
        </button>
        <div
          className={`flex flex-row space-x-7 px-2 rounded-sm ${color} transition-colors`}
        >
          {/* TODO: Based on text input, change colors so that it matches the class or enemy type (popular types only) */}
          <input
            type="text"
            autoFocus
            placeholder="Enter Name"
            value={name}
            onChange={(e) =>
              updateCharacter(
                roll,
                isPlayer,
                e.target.value,
                initiativeBonus,
                color
              )
            }
            className="ml-2 font-bold text-xl outline-none text-black placeholder:text-gray-800 dark:bg-transparent"
          />
          <div className="flex flex-row space-x-1 items-center justify-center">
            <div className="flex flex-col text-right font-bold text-gray-900 tracking-tighter -space-y-1">
              <span>Initiative</span>
              <span>Bonus</span>
            </div>
            <select
              className="font-bold text-xl bg-transparent outline-none text-black"
              value={initiativeBonus}
              onChange={(e) =>
                updateCharacter(
                  roll,
                  isPlayer,
                  name,
                  Number(e.target.value),
                  color
                )
              }
            >
              <option className="dark:text-white dark:bg-slate-600" value={-2}>
                -2
              </option>
              <option className="dark:text-white dark:bg-slate-600" value={-1}>
                -1
              </option>
              <option className="dark:text-white dark:bg-slate-600" value={0}>
                +0
              </option>
              <option className="dark:text-white dark:bg-slate-600" value={1}>
                +1
              </option>
              <option className="dark:text-white dark:bg-slate-600" value={2}>
                +2
              </option>
            </select>
          </div>
          <button onClick={changeColor}>
            <PaintCanIcon className="h-8 w-8 fill-gray-800" />
          </button>
        </div>
        <button
          onClick={() => deleteRow()}
          className={`${color} rounded-sm px-2 transition-colors`}
        >
          <TrashIcon className="h-8 w-8 fill-gray-800" />
        </button>
      </div>
    </div>
  );
}

export default CharacterRow;
