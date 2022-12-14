import { UserIcon as UserOutlineIcon } from '@heroicons/react/24/outline';
import {
  SwatchIcon,
  UserIcon as UserSolidIcon,
} from '@heroicons/react/24/solid';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { TrashIcon } from '@heroicons/react/24/solid';
import { useEffect, useState } from 'react';

type Props = {
  name: string;
  roll: number;
  isPlayer: boolean;
  initiativeBonus: number;
  updateCharacter: (
    roll: number,
    isPlayer: boolean,
    name: string,
    initiativeBonus: number
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
  updateCharacter,
  deleteRow,
}: Props) {
  const [color, setColor] = useState<string>('bg-gray-400');

  useEffect(() => {
    // TODO: On creation, randomize color
  }, []);

  function changeColor() {
    // TODO: Change color with randomizer
  }

  return (
    <div className="flex flex-row space-x-3">
      <div className="flex flex-row justify-center items-center w-7">
        {isPlayerTurn && <ArrowRightIcon className="h-7 w-7 text-white" />}
      </div>
      <div className="flex flex-row space-x-3">
        <div
          className={`flex flex-row items-center justify-center space-x-4 rounded-sm ${color} text-black px-5 py-2`}
        >
          <span className="font-bold text-2xl">{roll}</span>
          <button
            onClick={() => {
              updateCharacter(
                Math.floor(Math.random() * 20) + initiativeBonus,
                isPlayer,
                name,
                initiativeBonus
              );
            }}
          >
            RR
          </button>
        </div>
        <button
          className={`flex flex-col items-center justify-center p-2 rounded-sm ${color} text-black`}
          onClick={() =>
            updateCharacter(roll, !isPlayer, name, initiativeBonus)
          }
        >
          {isPlayer ? (
            <UserSolidIcon className="h-7 w-7" />
          ) : (
            <UserOutlineIcon className="h-7 w-7" />
          )}
        </button>
        <div className={`flex flex-row space-x-7 px-2 rounded-sm ${color}`}>
          {/* TODO: Based on text input, change colors so that it matches the class or enemy type (popular types only) */}
          <input
            type="text"
            autoFocus
            placeholder="Enter Name"
            value={name}
            onChange={(e) =>
              updateCharacter(roll, isPlayer, e.target.value, initiativeBonus)
            }
            className="ml-2 font-bold text-xl outline-none text-black placeholder:text-gray-600 dark:bg-transparent"
          />
          <div className="flex flex-row space-x-1 items-center justify-center">
            <div className="flex flex-col text-right font-bold text-gray-600 tracking-tighter -space-y-1">
              <span>Initiative</span>
              <span>Bonus</span>
            </div>
            <select
              className="font-bold text-xl bg-transparent outline-none text-black"
              value={initiativeBonus}
              onChange={(e) =>
                updateCharacter(roll, isPlayer, name, Number(e.target.value))
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
            <SwatchIcon className="h-8 w-8 text-gray-600" />
          </button>
        </div>
        <button
          onClick={() => deleteRow()}
          className={`${color} rounded-sm px-2`}
        >
          <TrashIcon className="h-8 w-8 text-gray-600" />
        </button>
      </div>
    </div>
  );
}

export default CharacterRow;
