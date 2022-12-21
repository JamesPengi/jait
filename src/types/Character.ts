import { getRandomColor } from '../utils/Colors';

export type Character = {
  roll: number;
  isPlayer: boolean;
  name: string;
  initiativeBonus: number;
  isTurn: boolean;
  color: string;
};

export const DEFAULT_CHARACTER: Character = {
  roll: 0,
  isPlayer: false,
  name: '',
  initiativeBonus: 0,
  isTurn: false,
  color: getRandomColor(),
};
