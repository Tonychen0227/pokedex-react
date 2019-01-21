import React from 'react';
import MonsItem from './MonsItem';

const MonsList = ({monsList, onMonSelect}) => {
    const renderedList = monsList.map((mon) => {
       return <MonsItem key={mon.name} onMonSelect={onMonSelect} mon={mon}/>; 
    });
    
    return( 
        <div className="mon-list ui grid container center aligned" style={{overflow: 'auto', maxHeight: 800 }}>{renderedList}</div>
    );
};

export default MonsList;