import { ResetRoundIcon } from '../utils/Icons';

type Props = {
  round: number;
  resetRound: () => void;
};

function CurrentRound({ round, resetRound }: Props) {
  return (
    <div className="flex flex-row justify-end items-end space-x-7">
      <div className="flex flex-row space-x-3">
        <span className="font-bold text-2xl">Current Round</span>
        <span className="font-bold text-2xl">{round}</span>
      </div>
      <button onClick={() => resetRound()} className="pr-2">
        <ResetRoundIcon className="h-8 w-8 dark:fill-white" />
      </button>
    </div>
  );
}

export default CurrentRound;
