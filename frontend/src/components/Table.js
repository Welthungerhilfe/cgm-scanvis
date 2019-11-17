import React, { Component } from 'react';
import ReactTable from "react-table";
import "react-table/react-table.css";
// import TableRow from './TableRow';

export default class Table extends React.Component {
    render () {
        const data = [{  
                todo: 'todo',  
                filename: 'todo',
                size: 'todo',
                updated: 'todo'
            },{  
                todo: 'todo',  
                filename: 'todo',
                size: 'todo',
                updated: 'todo'  
            },{  
                todo: 'todo',  
                filename: 'todo',
                size: 'todo',
                updated: 'todo'      
            },{  
                todo: 'todo',  
                filename: 'todo',
                size: 'todo',
                updated: 'todo'  
            },{  
                todo: 'todo',  
                filename: 'todo',
                size: 'todo',
                updated: 'todo'  
            },{  
                todo: 'todo',  
                filename: 'todo',
                size: 'todo',
                updated: 'todo'
            }]  
        const columns = [{  
            Header: 'TODO IMAGE',  
            accessor: 'todo'  
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

