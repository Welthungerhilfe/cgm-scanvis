import React, { Component } from 'react';
import ReactTable from "react-table";
import {Link} from 'react-router-dom'
import "react-table/react-table.css";
// import TableRow from './TableRow';

export default class Table extends React.Component {

    render () {

        const columns = [{
            Header: '',
            accessor: 'folder'
        },{
            Header: 'File Name',
            accessor: 'filename'
        },{
            Header: 'File Size',
            accessor: 'size'
        },{
            Header: 'Last Modified',
            accessor: 'updated'
        },
        {
            Header: 'Link',
            accessor: 'link',
            id:'links',
            Cell:({row})=>(<Link to={{pathname:'/visualizer'}}>Visualize</Link>)
        }]
        return (
            <div>
                <ReactTable
                    data={this.props.data}
                    columns={columns}
                    defaultPageSize = {5}
                    pageSizeOptions = {[5,25,50,100]}
                />
            </div>
        )
    }
}

