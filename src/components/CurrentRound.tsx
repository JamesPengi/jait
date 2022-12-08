import { ArrowUturnLeftIcon } from '@heroicons/react/24/outline';

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
        <ArrowUturnLeftIcon className="h-6 w-6" />
      </button>
    </div>
  );
}

export default CurrentRound;
