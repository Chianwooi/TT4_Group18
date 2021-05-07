import React from 'react'
import MaterialTable from 'material-table'

export default function History() {

    const data=[
        {name: 'person1', balance: 'balance1'},
        {name: 'person2', balance: 'balance2'},
        {name: 'person3', balance: 'balance3'},
        {name: 'person4', balance: 'balance4'}

    ]

    const columns=[
        {
            title:'Name', field: 'name'
        },
        {
            title:'Balance', field: 'balance'
        }
    ]

    return (
        <div>
            <MaterialTable title='Material Table'
            data={data}
            columns={columns}
            />
        </div>
    )
}
