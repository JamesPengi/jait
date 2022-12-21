import {
  DiceIcon,
  NPCShieldIcon,
  PaintCanIcon,
  TrashIcon,
} from '../utils/Icons';

type Props = {
  addCharacter: () => void;
};

function NewCharacter({ addCharacter }: Props) {
  return (
    <div className="flex flex-row space-x-3">
      <div className="w-9"></div>
      <div className="flex flex-row space-x-3">
        <div
          className={`flex flex-row items-center justify-center space-x-4 rounded-sm bg-gray-400 text-black px-5 py-2`}
        >
          <span className="font-bold text-center text-2xl w-10">-</span>
          <DiceIcon className="h-9 w-9 fill-black" />
        </div>
        <span
          className={`flex flex-col items-center justify-center p-2 rounded-sm bg-gray-400 text-black`}
        >
          <NPCShieldIcon className="h-7 w-7 fill-gray-700" />
        </span>
        <div className={`flex flex-row space-x-7 px-2 rounded-sm bg-gray-400`}>
          <input
            type="text"
            placeholder="Click to add character"
            defaultValue={''}
            readOnly
            onClick={() => addCharacter()}
            className="ml-2 font-bold text-xl outline-none text-black placeholder:text-gray-600 bg-transparent"
          />
          <div className="flex flex-row space-x-2 items-center justify-center">
            <div className="flex flex-col text-right font-bold text-gray-600 tracking-tighter -space-y-1">
              <span>Initiative</span>
              <span>Bonus</span>
            </div>
            <input
              type="number"
              value={0}
              disabled
              className="bg-transparent font-bold text-2xl text-center w-14 text-black"
            />
          </div>
          <div className="flex flex-col items-center justify-center">
            <PaintCanIcon className="h-8 w-8 fill-gray-600" />
          </div>
        </div>
        <div
          className={`flex flex-col items-center justify-center bg-gray-400 rounded-sm px-2`}
        >
          <TrashIcon className="h-8 w-8 fill-gray-600" />
        </div>
      </div>
    </div>
  );
}

export default NewCharacter;
