import React from 'react';
import './App.css';
import YandexMap from "./Components/YandexMap/YandexMap";
import YandexControls from "./Components/YandexControls/YandexControls";

const App = () => {
    return (
        <div className="app-wrapper">
            <YandexMap/>
            <YandexControls/>
        </div>
    );
}

export default App;
