import React from 'react';
import './SelectedMon.css';

const SelectedMon = ({searchedMon, onSearchMonSelect}) => {
    if(!searchedMon) {
        return (
            <div>
                <p>Loading...</p>
            </div>
        );
    }
    
    return( 
        <div className='selected-mon'>
            <div className="segment ui">
                <h2>Pokémon Information</h2>
                <div className="ui card selected-mon" onClick={() => onSearchMonSelect(searchedMon)}>
                    <div className="image">
                        <img alt={searchedMon.name} src={searchedMon.sprites.front_default} />
                    </div>
                    <div className="content">
                        <h2>{searchedMon.name.charAt(0).toUpperCase() + searchedMon.name.slice(1)}</h2>
                    </div>
                    <div align="left" className="selectDesc">
                        <div class="description">
                            Pokedex #{searchedMon.order}
                        </div>
                        <div>
                            Base HP: {searchedMon.stats[5].base_stat}
                        </div>
                        <div>
                            Base Atk: {searchedMon.stats[4].base_stat}
                        </div>
                        <div>
                            Base Def: {searchedMon.stats[3].base_stat}
                        </div>
                        <div>
                            Base SpAtk: {searchedMon.stats[2].base_stat}
                        </div>
                        <div>
                            Base SpDef: {searchedMon.stats[1].base_stat}
                        </div>
                        <div>
                            Base Spd: {searchedMon.stats[0].base_stat}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SelectedMon;