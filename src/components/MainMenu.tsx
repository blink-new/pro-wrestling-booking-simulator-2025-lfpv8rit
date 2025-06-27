import React from 'react';

interface MainMenuProps {
  onNavigate: (screen: 'new_game' | 'roster' | 'settings' | 'load_game') => void;
}

const MainMenu: React.FC<MainMenuProps> = ({ onNavigate }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <h1 className="text-6xl font-bold mb-8 text-center">Pro Wrestling Booking Simulator 2025</h1>
      <div className="space-y-4">
        <button
          onClick={() => onNavigate('new_game')}
          className="w-64 bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg text-xl transition duration-300 ease-in-out transform hover:scale-105"
        >
          New Game
        </button>
        <button
          onClick={() => onNavigate('load_game')}
          className="w-64 bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-lg text-xl transition duration-300 ease-in-out transform hover:scale-105"
        >
          Load Game
        </button>
        <button
          onClick={() => onNavigate('settings')}
          className="w-64 bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg text-xl transition duration-300 ease-in-out transform hover:scale-105"
        >
          Settings
        </button>
      </div>
    </div>
  );
};

export default MainMenu;