import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import "./App.css";
import Banner from "./Components/Banner/Banner";
import RowPost from "./Components/RowPost/RowPost";
import {Originals,Action, RomanceMOvies, Documentaries, Trending, Comedy, Horror, Test} from "./url";


function App() {
  return (
    <div className="App">
    <NavBar/>
    <Banner/>
    <RowPost url = {Originals} title = "Netflix Originals"/>
    <RowPost url = {Action} title = "Action" isSmall/>
    <RowPost url = {RomanceMOvies} title = "RomanceMOvies" isSmall/>
    <RowPost url = {Documentaries} title = "Documentaries" isSmall/>
    <RowPost url = {Comedy} title = "Comedy" isSmall/>
    <RowPost url = {Trending} title = "Trending" isSmall/>
    <RowPost url = {Horror} title = "Horror" isSmall/>
    <RowPost url = {Test} title = "Horror" isSmall/>
    </div>
  );
}

export default App;
