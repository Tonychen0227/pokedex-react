import React from 'react';
import './App.css';
import SearchBar from './SearchBar';
import MonsList from './MonsList';
import MonParty from './MonParty';
import SelectedMon from './SelectedMon';
import pokeapi from '../api/pokeapi';
import pokeapiList from '../api/pokeapiList';

const MAX_PARTY = 6;    /* Max number of Pokemon on your team */

class App extends React.Component {
    
    state = {searchedMon: null, monsList: [], selectedMons: []};
    
    componentDidMount() {
        this.monsListGenerate();
        this.onTermSubmit('bulbasaur');
    }
    
    /* Generate the selection panel */
    monsListGenerate = async (MON_LIMIT) => {
        const monsListResponse = await pokeapiList.get('/pokemon', {
            params: {
                limit: 151  /* For first generation only */
            }
        });
        this.setState({monsList: monsListResponse.data.results});
    }
    
    /* Add selected Pokemon to party */
    onMonSelect = (mon) => {
        if(this.state.selectedMons.length < MAX_PARTY && !this.state.selectedMons.includes(mon)) {
            this.setState({selectedMons: [...this.state.selectedMons, mon]})
        }
    }
    
    /* Add selected Pokemon to party from search panel */
    onSearchMonSelect = (mon) => {
        if(this.state.selectedMons.length < MAX_PARTY && !this.state.selectedMons.includes(mon)) {
            this.setState({selectedMons: [...this.state.selectedMons, mon.species]})
        }
    }
    
    /* Sets state with searched Pokemon data */
    onTermSubmit = async term => {
        const response = await pokeapi.get(`${term}`);
        this.setState({searchedMon: response.data})
    };
    
    /* Clear selected party panel */
    onClearSelected = () => {
        this.setState({selectedMons: []});
    }
    
    render() {
        return(
            <div className="main">
                <div className="ui grid">
                    <div className="two wide column">
                        <SearchBar onTermSubmit={this.onTermSubmit} />
                        <SelectedMon onSearchMonSelect={this.onSearchMonSelect} searchedMon={this.state.searchedMon}/>
                        <button style={{ marginTop: '2em' }} type="button" onClick={this.onClearSelected} className="ui button">Clear Party</button>
                    </div>
                    <div className="seven wide column">
                        <div className="ui segment">
                            <h1 className="party">Selected Party</h1>
                            <MonParty selectedMons={this.state.selectedMons}/>
                        </div>
                    </div>
                    <div className="seven wide column">
                        <div className="ui segment">
                            <h1 className="selection">Pokémon Selection</h1>
                            <MonsList className="ui" onMonSelect={this.onMonSelect} monsList={this.state.monsList} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;