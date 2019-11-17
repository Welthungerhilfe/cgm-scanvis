import React from 'react';
import Filter from './Filter';
const FilterList = (props) => {
    return (
        <div className="Filter">
            <p>Select the data filters you wish to pull</p>
            <div className="FilterList">
                <Filter title='Consent' handleChange={props.handleChange}></Filter>
                <Filter title='RGB' handleChange={props.handleChange}></Filter>
                <Filter title='PCD' handleChange={props.handleChange}></Filter>
            </div>
        </div>
    );
};  

export default FilterList;
