import React from 'react';

interface NewGameScreenProps {
  onNavigate: (screen: 'main_menu' | 'roster' | 'create_promotion', promotion?: string) => void;
}

const promotions = ['WWE RAW', 'WWE SMACKDOWN', 'WWE NXT', 'AEW', 'ROH', 'TNA', 'MLW', 'GCW', 'REVOLVER', 'DPW', 'Smash', 'Rock Solid'];

const NewGameScreen: React.FC<NewGameScreenProps> = ({ onNavigate }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-4">
      <h1 className="text-5xl font-bold mb-8">New Game</h1>
      <div className="w-full max-w-4xl bg-gray-800 p-6 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold mb-6 text-center">Choose Your Path</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-700 p-6 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Start with an Existing Promotion</h3>
            <p className="mb-4 text-gray-300">Take control of a well-known promotion and lead it to glory.</p>
            <div className="max-h-60 overflow-y-auto pr-2">
              {promotions.map(promo => (
                <button
                  key={promo}
                  onClick={() => onNavigate('roster', promo)}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-2 transition duration-300"
                >
                  {promo}
                </button>
              ))}
            </div>
          </div>
          <div className="bg-gray-700 p-6 rounded-lg flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-4">Create Your Own Promotion</h3>
              <p className="mb-4 text-gray-300">Build your empire from the ground up, with your own vision.</p>
            </div>
            <button
              onClick={() => onNavigate('create_promotion')}
              className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-4 transition duration-300"
            >
              Start from Scratch
            </button>
          </div>
        </div>
        <div className="mt-8 text-center">
          <button
            onClick={() => onNavigate('main_menu')}
            className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-8 rounded-lg transition duration-300"
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewGameScreen;