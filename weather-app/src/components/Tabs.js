import React from 'react';

const Tabs = ({ currentTab, onTabSwitch }) => {
  return (
    <div className="tab-container">
      <p 
        className={`tab ${currentTab === 'userWeather' ? 'current-tab' : ''}`} 
        onClick={() => onTabSwitch('userWeather')}
      >
        Your Weather
      </p>
      <p 
        className={`tab ${currentTab === 'searchWeather' ? 'current-tab' : ''}`} 
        onClick={() => onTabSwitch('searchWeather')}
      >
        Search Weather
      </p>
    </div>
  );
};

export default Tabs;
