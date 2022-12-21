const colors = [
  'bg-red-600',
  'bg-orange-600',
  'bg-amber-600',
  'bg-yellow-600',
  'bg-lime-600',
  'bg-green-600',
  'bg-emerald-600',
  'bg-teal-600',
  'bg-cyan-600',
  'bg-sky-600',
  'bg-blue-600',
  'bg-indigo-600',
  'bg-violet-600',
  'bg-purple-600',
  'bg-fuchsia-600',
  'bg-pink-600',
  'bg-rose-600',
];

function getRandomColor(previousColor?: string): string {
  const previousColorIndex = colors.findIndex(
    (color) => color === previousColor
  );
  const newColorArray = [
    ...colors.slice(0, previousColorIndex),
    ...colors.slice(previousColorIndex + 1),
  ];

  return newColorArray[Math.floor(Math.random() * newColorArray.length)];
}

export { getRandomColor };
