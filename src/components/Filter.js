import React from 'react';
import '../styles/Filter.css';
const Filter = (props) => {
    return (
        <>
            <div className="Inputs">
                <input type='checkbox' aria-label={`checkbox for ${props.title}`} name={props.title} onChange={(e)=> props.handleChange(e)}/>
                <label htmlFor={props.title}>{props.title}</label>
            </div>    
        </>
    );
};

export default Filter;
