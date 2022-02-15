import React from 'react';
import './App.css';
import YandexMap from "./components/YandexMap/YandexMap";
import YandexControls from "./components/YandexControls/YandexControls";
import {store} from "./state/store";

const App = () => {
    console.log(store.getState())
    return (
        <div className="app-wrapper">
            <YandexMap/>
            <YandexControls/>
        </div>
    );
}

export default App;
