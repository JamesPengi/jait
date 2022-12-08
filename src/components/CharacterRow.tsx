import { UserIcon as UserOutlineIcon } from '@heroicons/react/24/outline';
import {
  SwatchIcon,
  UserIcon as UserSolidIcon,
} from '@heroicons/react/24/solid';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { TrashIcon } from '@heroicons/react/24/solid';
import { useEffect, useState } from 'react';

type Props = {
  index: number;
  changeInitiativeRoll: (index: number) => void;
  deleteRow: (index: number) => void;
  isPlayerTurn?: boolean;
};

function CharacterRow({
  index,
  isPlayerTurn,
  changeInitiativeRoll,
  deleteRow,
}: Props) {
  const [characterName, setCharacterName] = useState<string>('');
  const [isPlayer, setIsPlayer] = useState<boolean>(false);
  const [initiativeRoll, setInitiativeRoll] = useState<number>(0);
  const [bonus, setBonus] = useState<string>('+0');
  const [color, setColor] = useState<string>('bg-gray-400');

  useEffect(() => {
    // TODO: On creation, focus the text field and randomize color
  }, []);

  function rerollInitiative() {
    // TODO: Reroll character initiative
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
          <span className="font-bold text-2xl">{initiativeRoll}</span>
          <button>RR</button>
        </div>
        <button
          className={`flex flex-col items-center justify-center p-2 rounded-sm ${color} text-black`}
          onClick={() => setIsPlayer(!isPlayer)}
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
            placeholder="Click to add character"
            value={characterName}
            onChange={(e) => setCharacterName(e.target.value)}
            className="ml-2 font-bold text-xl outline-none text-black placeholder:text-gray-600 dark:bg-transparent"
          />
          <div className="flex flex-row space-x-1 items-center justify-center">
            <div className="flex flex-col text-right font-bold text-gray-600 tracking-tighter -space-y-1">
              <span>Initiative</span>
              <span>Bonus</span>
            </div>
            <select
              className="font-bold text-xl bg-transparent outline-none text-black"
              value={bonus}
              onChange={(e) => setBonus(e.target.value)}
            >
              <option className="dark:text-white dark:bg-slate-600" value="-2">
                -2
              </option>
              <option className="dark:text-white dark:bg-slate-600" value="-1">
                -1
              </option>
              <option className="dark:text-white dark:bg-slate-600" value="+0">
                +0
              </option>
              <option className="dark:text-white dark:bg-slate-600" value="+1">
                +1
              </option>
              <option className="dark:text-white dark:bg-slate-600" value="+2">
                +2
              </option>
            </select>
          </div>
          <button>
            {/* TODO: Add color cycle */}
            <SwatchIcon className="h-8 w-8 text-gray-600" />
          </button>
        </div>
        <button
          onClick={() => deleteRow(index)}
          className={`${color} rounded-sm px-2`}
        >
          <TrashIcon className="h-8 w-8 text-gray-600" />
        </button>
      </div>
    </div>
  );
}

export default CharacterRow;
