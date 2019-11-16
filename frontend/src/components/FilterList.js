import React, { Component } from 'react';
import Filter from './Filter'
class FilterList extends Component {
    render() {
        return (
            <div>
                <Filter>Filter 1</Filter>
                <Filter>Filter 2</Filter>
            </div>
        );
    }
}

export default FilterList;