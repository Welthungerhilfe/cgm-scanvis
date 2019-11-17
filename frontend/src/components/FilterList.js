import React from 'react';
import {InputGroup} from 'reactstrap';
import Filter from './Filter'
const FilterList = () => {
    return (
        <div>
            <p>Select the data filters you wish to pull</p>
            <Filter title='Consent'></Filter>
            <Filter title='RGB'></Filter>
            <Filter title='PCD'></Filter>
            <Filter title='TODO'></Filter>
            <Filter title='TODO'></Filter>
        </div>
    );
};  

export default FilterList;