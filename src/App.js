import React from 'react';
import './App.css';
import AppHeader from './components/app-header/AppHeader';
import AppBody from './components/app-body/AppBody';
import AppFooter from './components/app-footer/AppFooter';

function App() {
  return (
    <div className="App">
        <AppHeader />
        <AppBody />
        <AppFooter />
    </div>
  );
}

export default App;
