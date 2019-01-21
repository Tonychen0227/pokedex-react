import React from 'react';
import './MonsItem.css'

const MonsItem = ({mon, onMonSelect}) => {
    const MON_INDEX_KEY = 6;
    const SPRITE_STR = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
    var MON_NUM = (mon.url.split('/'))[MON_INDEX_KEY];
    
    return (
        <div className="segAlign">
            <div onClick={() => onMonSelect(mon)} className="ui card selectCard">
                <div className="image">
                    <img alt={mon.name} src={SPRITE_STR + MON_NUM + ".png"} />
                </div>
                <div className="content">
                    <h2 className="selectionName">{mon.name.charAt(0).toUpperCase() + mon.name.slice(1)}</h2>
                </div>
            </div>
        </div>
    );
};

export default MonsItem;