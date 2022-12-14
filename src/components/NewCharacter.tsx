import { UserIcon as UserOutlineIcon } from '@heroicons/react/24/outline';
import { SwatchIcon } from '@heroicons/react/24/solid';
import { TrashIcon } from '@heroicons/react/24/solid';

type Props = {
  addCharacter: () => void;
};

function NewCharacter({ addCharacter }: Props) {
  return (
    <div className="flex flex-row space-x-3">
      <div className="w-7"></div>
      <div className="flex flex-row space-x-3">
        <div
          className={`flex flex-row items-center justify-center space-x-4 rounded-sm bg-gray-400 text-black px-5 py-2`}
        >
          <span className="font-bold text-2xl">-</span>
          <span>RR</span>
        </div>
        <span
          className={`flex flex-col items-center justify-center p-2 rounded-sm bg-gray-400 text-black`}
        >
          <UserOutlineIcon className="h-7 w-7" />
        </span>
        <div className={`flex flex-row space-x-7 px-2 rounded-sm bg-gray-400`}>
          <input
            type="text"
            placeholder="Click to add character"
            defaultValue={''}
            readOnly
            onClick={() => addCharacter()}
            className="ml-2 font-bold text-xl outline-none text-black placeholder:text-gray-600 dark:bg-transparent"
          />
          <div className="flex flex-row space-x-1 items-center justify-center">
            <div className="flex flex-col text-right font-bold text-gray-600 tracking-tighter -space-y-1">
              <span>Initiative</span>
              <span>Bonus</span>
            </div>
            <select
              className="font-bold text-xl bg-transparent outline-none text-black"
              value={0}
              disabled
            >
              <option className="dark:text-white dark:bg-slate-600" value={0}>
                +0
              </option>
            </select>
          </div>
          <div className="flex flex-col items-center justify-center">
            <SwatchIcon className="h-8 w-8 text-gray-600" />
          </div>
        </div>
        <div
          className={`flex flex-col items-center justify-center bg-gray-400 rounded-sm px-2`}
        >
          <TrashIcon className="h-8 w-8 text-gray-600" />
        </div>
      </div>
    </div>
  );
}

export default NewCharacter;