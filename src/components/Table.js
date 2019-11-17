import React, { Component } from 'react';
import ReactTable from "react-table";
import "react-table/react-table.css";
// import TableRow from './TableRow';

export default class Table extends React.Component {
    render () {
        const data = [{  
                folder: '',  
                filename: 'todo',
                size: 'todo',
                updated: 'todo'
            },{  
                folder: '',  
                filename: 'todo',
                size: 'todo',
                updated: 'todo'  
            },{  
                folder: '',  
                filename: 'todo',
                size: 'todo',
                updated: 'todo'      
            },{  
                folder: '',  
                filename: 'todo',
                size: 'todo',
                updated: 'todo'  
            },{  
                folder: '',  
                filename: 'todo',
                size: 'todo',
                updated: 'todo'  
            },{  
                folder: '',  
                filename: 'todo',
                size: 'todo',
                updated: 'todo'
            }]  
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
        }]  
        return (
            <div>  
                <ReactTable  
                    data={data}  
                    columns={columns}  
                    defaultPageSize = {5}  
                    pageSizeOptions = {[5,25,50,100]}  
                />  
            </div>    
        )
    }
}

