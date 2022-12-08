import CharacterRow from './components/CharacterRow';

function App() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen space-y-20 dark:bg-slate-700 dark:text-white">
      <h1 className="text-2xl font-bold">Just Another Initiative Tracker</h1>

      <CharacterRow
        index={0}
        changeInitiativeRoll={(index) =>
          console.log('Roll Change Function', index)
        }
        deleteRow={(index) => console.log(`Row Delete: ${index}`)}
      />
    </div>
  );
}

export default App;
