import React from 'react';
import Filter from './Filter';
const FilterList = () => {
    return (
        <div className="Filter">
            <p>Select the data filters you wish to pull</p>
            <div className="FilterList">
                <Filter title='Consent'></Filter>
                <Filter title='RGB'></Filter>
                <Filter title='PCD'></Filter>
            </div>
        </div>
    );
};  

export default FilterList;
