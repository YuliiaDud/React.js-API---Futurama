import React, {Component} from 'react';
import "./App.css";
import TheHeader from "./components/layout/TheHeader";
import CharactersList from "./components/CharactersList";
import GeneralInfo from "./components/GeneralInfo";

function App(props) {
    return (
        <div>
            <TheHeader/>
            <GeneralInfo/>
            <CharactersList/>
        </div>
    );
}

export default App;