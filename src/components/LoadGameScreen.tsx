import React from 'react';

interface LoadGameScreenProps {
  onNavigate: (screen: 'main_menu') => void;
}

const LoadGameScreen: React.FC<LoadGameScreenProps> = ({ onNavigate }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-4">
      <h1 className="text-5xl font-bold mb-8">Load Game</h1>
      <p className="text-xl mb-8">This is where you'll load your saved games.</p>
      <button
        onClick={() => onNavigate('main_menu')}
        className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-8 rounded-lg transition duration-300"
      >
        Back to Main Menu
      </button>
    </div>
  );
};

export default LoadGameScreen;
