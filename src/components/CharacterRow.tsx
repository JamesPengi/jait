import {
  DiceIcon,
  NPCShieldIcon,
  PaintCanIcon,
  PCShieldIcon,
  PlayerTrackerIcon,
  TrashIcon,
} from "../utils/Icons";
import { useEffect } from "react";
import { getRandomColor } from "../utils/Colors";

type Props = {
  name: string;
  roll: number;
  isPlayer: boolean;
  initiativeBonus: number;
  color: string;
  addCharacter: () => void;
  updateCharacter: (
    roll: number,
    isPlayer: boolean,
    name: string,
    initiativeBonus: number,
    color: string
  ) => void;
  deleteRow: () => void;
  isPlayerTurn?: boolean;
  isFirst?: boolean;
};

function CharacterRow({
  name,
  roll,
  isPlayer,
  initiativeBonus,
  isPlayerTurn,
  color,
  isFirst,
  addCharacter,
  updateCharacter,
  deleteRow,
}: Props) {
  useEffect(() => {
    if (isFirst) {
      if (name === "") {
        updateCharacter(roll, isPlayer, name, initiativeBonus, "bg-gray-600");
      } else if (color === "bg-gray-600") {
        changeColor();
      }
    } else {
      if (color === "bg-gray-600") {
        changeColor();
      }
    }
  }, [name]);

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
      <div className="flex w-9 flex-row items-center justify-center">
        {isPlayerTurn && (
          <PlayerTrackerIcon className="h-9 w-9 dark:fill-white" />
        )}
      </div>
      <div className="flex flex-row space-x-3">
        <div
          className={`flex flex-row space-x-2 rounded-sm ${color} px-5 py-2 text-black`}
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
            className="w-12 bg-transparent text-center text-2xl font-bold"
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
          className={`flex flex-col items-center justify-center rounded-sm p-2 ${color} text-black transition-colors`}
          onClick={() =>
            updateCharacter(roll, !isPlayer, name, initiativeBonus, color)
          }
        >
          {isPlayer ? (
            <PCShieldIcon className="h-7 w-7 fill-black" />
          ) : (
            <NPCShieldIcon className="h-7 w-7 fill-gray-700" />
          )}
        </button>
        <div
          className={`flex flex-row space-x-7 rounded-sm px-2 ${color} transition-colors`}
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
            onKeyDown={(e) => {
              if (e.code === "Enter") {
                addCharacter();
              }
            }}
            className="ml-2 bg-transparent text-xl font-bold text-black outline-none placeholder:text-gray-800"
          />
          <div className="flex flex-row items-center justify-center space-x-2">
            <div className="flex flex-col -space-y-1 text-right font-bold tracking-tighter text-gray-900">
              <span>Initiative</span>
              <span>Bonus</span>
            </div>
            <input
              type="number"
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
              onKeyDown={(e) => {
                if (e.code === "Enter") {
                  addCharacter();
                }
              }}
              className="w-14 bg-transparent text-center text-2xl font-bold text-black"
            />
          </div>
          {/* TODO: Make color pallette when picking a color */}
          <button onClick={changeColor}>
            <PaintCanIcon className="h-8 w-8 fill-gray-800" />
          </button>
        </div>
        {/* TODO: Confirm delete with the user. Change background to red and maybe pulsing? */}
        <button
          onClick={() => !isFirst && deleteRow()}
          className={`${color} rounded-sm px-2 transition-colors ${
            isFirst && `hover:cursor-not-allowed`
          }`}
        >
          <TrashIcon className="h-8 w-8 fill-gray-800" />
        </button>
      </div>
    </div>
  );
}

export default CharacterRow;
