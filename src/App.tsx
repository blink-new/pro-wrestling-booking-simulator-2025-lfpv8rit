import React, { useState } from 'react';
import MainMenu from './components/MainMenu';
import NewGameScreen from './components/NewGameScreen';
import RosterScreen from './components/RosterScreen';
import CreatePromotionScreen from './components/CreatePromotionScreen';
import SettingsScreen from './components/SettingsScreen';
import LoadGameScreen from './components/LoadGameScreen';

type Screen = 'main_menu' | 'new_game' | 'roster' | 'create_promotion' | 'settings' | 'load_game';

const App: React.FC = () => {
  const [screen, setScreen] = useState<Screen>('main_menu');
  const [selectedPromotion, setSelectedPromotion] = useState<string | null>(null);

  const handleNavigate = (newScreen: Screen, promotion?: string) => {
    setScreen(newScreen);
    if (promotion) {
      setSelectedPromotion(promotion);
    }
  };

  const renderScreen = () => {
    switch (screen) {
      case 'new_game':
        return <NewGameScreen onNavigate={handleNavigate} />;
      case 'roster':
        return <RosterScreen promotion={selectedPromotion!} onNavigate={handleNavigate} />;
      case 'create_promotion':
        return <CreatePromotionScreen onNavigate={handleNavigate} />;
      case 'settings':
        return <SettingsScreen onNavigate={handleNavigate} />;
      case 'load_game':
        return <LoadGameScreen onNavigate={handleNavigate} />;
      case 'main_menu':
      default:
        return <MainMenu onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen font-sans">
      {renderScreen()}
    </div>
  );
};

export default App;