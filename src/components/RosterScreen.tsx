import React from 'react';
import { rosters } from '../rosters';

interface RosterScreenProps {
  promotion: string;
  onNavigate: (screen: 'main_menu') => void;
}

const RosterScreen: React.FC<RosterScreenProps> = ({ promotion, onNavigate }) => {
  const roster = rosters[promotion];

  if (!roster) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-4">
        <h1 className="text-5xl font-bold mb-8">Roster Not Found</h1>
        <p className="text-xl mb-8">Could not find the roster for {promotion}.</p>
        <button
          onClick={() => onNavigate('main_menu')}
          className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-8 rounded-lg transition duration-300"
        >
          Back to Main Menu
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-900 text-white p-4">
      <h1 className="text-5xl font-bold my-8">{promotion} Roster</h1>
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-gray-800 p-6 rounded-lg">
          <h2 className="text-3xl font-bold mb-4 text-center">Men</h2>
          <div className="max-h-96 overflow-y-auto pr-2">
            <ul>
              {roster.men.map(wrestler => (
                <li key={wrestler} className="bg-gray-700 p-3 rounded-lg mb-2 text-lg">{wrestler}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg">
          <h2 className="text-3xl font-bold mb-4 text-center">Women</h2>
          <div className="max-h-96 overflow-y-auto pr-2">
            <ul>
              {roster.women.map(wrestler => (
                <li key={wrestler} className="bg-gray-700 p-3 rounded-lg mb-2 text-lg">{wrestler}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <button
        onClick={() => onNavigate('main_menu')}
        className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-8 rounded-lg transition duration-300 mt-8"
      >
        Back to Main Menu
      </button>
    </div>
  );
};

export default RosterScreen;