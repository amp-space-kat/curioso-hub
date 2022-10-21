import './App.css';
import MainContainer from './MainContainer/MainContainer';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import PhotoAlbum from './PhotoAlbum/PhotoAlbum';
import Augmentation from './Augmentation/Augmentation';
import React, { useState, useEffect } from 'react';
import { constants } from "./constants";


const curiosos = [{name: 'growlz'}, {name: 'rocky'}, {name: 'wingrat'}]

function App() {
    const [curiosoIdx, setCurioso] = useState(0);
    const [backgroundIdx, setBackground] = useState(0);

    const changeCurioso = () => {
        const newIdx = curiosoIdx < curiosos.length - 1 ? curiosoIdx + 1 : 0;
        setCurioso(newIdx);
        setBackground(0)
    }

    const changeBackground = () => {
        const newIdx = backgroundIdx < constants.BACKGROUND_ITEMS.length - 1 ? backgroundIdx + 1 : 0;
        setBackground(newIdx);
    }
    return (
        <div className="App">
        <Router basename="/index.html">
            <Switch>
                <Route exact path="/" render={(props) => 
                <MainContainer 
                    backgroundIdx={backgroundIdx} 
                    changeBackground={changeBackground} 
                    changeCurioso={changeCurioso} 
                    curioso={curiosos[curiosoIdx]} 
                />} />
                <Route path="/photo-album" component={PhotoAlbum} />
                <Route path="/augmentation" 
                       render={(props) => (
                            <Augmentation
                            curioso={curiosos[curiosoIdx]} 
                            />
                       )}/>
            </Switch>
        </Router>    
    </div>
  );
}

export default App;
