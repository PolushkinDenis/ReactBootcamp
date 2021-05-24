import React from 'react';
import './App.css';

import { News } from './pages/News'
import { WeatherInPast } from './pages/WeatherInPast'

const App: React.FC = () => {
  return (
    <div className="App">
      <p className="app_title">
        <span>Weather</span>
        <span>forecast</span>
      </p>
      <main className="app_component">
        <div className="app_component_item">
          <News />
        </div>
        <div className="app_component_item">
          <WeatherInPast />
        </div>
      </main>
      <footer className="app_footer">
        C ЛЮБОВЬЮ ОТ MERCURY DEVELOPMENT
      </footer>
    </div>
  );
}

export default App;
