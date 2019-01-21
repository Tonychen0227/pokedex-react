import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
    state = {term: ''};
    
    onInputChange = event => {
        this.setState({term: event.target.value.toLowerCase()});
    };
    
    onFormSubmit = event => {
      event.preventDefault();
      this.props.onTermSubmit(this.state.term);
    };
    
    render() {
        return( 
            <div className="search-bar">
                <div className="ui segment">
                    <form onSubmit={this.onFormSubmit} className="ui form">
                        <div className="field">
                            <label>Pokémon Search</label>
                            <input 
                                type="text" 
                                value={this.state.term}
                                onChange={this.onInputChange}
                            />
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default SearchBar;