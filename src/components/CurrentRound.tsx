import { ResetRoundIcon } from "../utils/Icons";

type Props = {
  round: number;
  resetRound: () => void;
};

function CurrentRound({ round, resetRound }: Props) {
  return (
    <div className="flex flex-row items-end justify-end space-x-7">
      <div className="flex flex-row items-center space-x-3">
        <span className="text-2xl font-bold">Current Round:</span>
        <span className="text-4xl font-bold">{round}</span>
      </div>
      <button onClick={() => resetRound()} className="pr-2.5">
        <ResetRoundIcon className="h-8 w-8 dark:fill-white" />
      </button>
    </div>
  );
}

export default CurrentRound;
