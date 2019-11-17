import { Input, InputGroupAddon, InputGroup, InputGroupText } from 'reactstrap';
import React from 'react';
const Filter = (props) => {
    return (
        <InputGroup>
            <InputGroupAddon addonType='append'>
                <InputGroupText>
                    <Input type='checkbox' aria-label={`checkbox for ${props.title}`}/>
                    <label for={props.title}>{props.title}</label>
                </InputGroupText>
            </InputGroupAddon>
        </InputGroup>
    );
};

export default Filter;
