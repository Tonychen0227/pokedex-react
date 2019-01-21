import React from 'react';

const MonParty = ({selectedMons}) => {
    const MON_INDEX_KEY = 6;
    const SPRITE_STR = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

    const renderedList = selectedMons.map((mon) => {
        return (
            <div className="segAlign">
                <div key={mon.name}>
                    <div className="ui card">
                        <div className="image">
                            <img alt={mon.name} src={SPRITE_STR + mon.url.split('/')[MON_INDEX_KEY] + ".png"} />
                        </div>
                        <div className="content">
                            <h2 className="partyName">{mon.name.charAt(0).toUpperCase() + mon.name.slice(1)}</h2>
                        </div>
                    </div>
                </div>
            </div>
        );
    });
    
    return( 
        <div className="mon-list ui grid container center aligned">{renderedList}</div>
    );
};

export default MonParty;