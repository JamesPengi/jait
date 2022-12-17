import { ResetRoundIcon } from '../utils/Icons';

type Props = {
  round: number;
  resetRound: () => void;
};

function CurrentRound({ round, resetRound }: Props) {
  return (
    <div className="flex flex-row space-x-7 right">
      <div className="flex flex-row space-x-3">
        <span className="font-bold text-xl">Current Round</span>
        <span className="font-bold text-xl">{round}</span>
      </div>
      <button onClick={() => resetRound()}>
        <ResetRoundIcon className="h-7 w-7 dark:fill-white" />
      </button>
    </div>
  );
}

export default CurrentRound;
