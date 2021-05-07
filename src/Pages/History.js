import React, { useState, useEffect } from 'react'
import MaterialTable from 'material-table'

export default function History() {

    const [results, setResults] = useState([]);

    let currentUser = JSON.parse(localStorage.getItem('user'));
    // console.log(currentUser.custID);
    // console.log("hi");

    // useEffect(() => {
    // const requestOptions = {
    // method: 'POST',
    // headers: { "x-api-key": "rcqYXzQ9PY1rQtUNJB9X56JOvnQWnf27S09nX8Rh", },
    // body: JSON.stringify({ 
    // custID: currentUser.custID, 
    // accountKey: currentUser.accountKey,
    // // userPass: "lIozkWgKHpyJvs0" 
    // })
    // };
    // fetch('https://ipllrj2mq8.execute-api.ap-southeast-1.amazonaws.com/techtrek/transactions/view', requestOptions)
    // .then(response => response.json())
    // .then(data => {
    // // console.log(data);
    // setResults(data);
    // console.log(results);
    // });
    // }, []);

    const data=[
        {custID: 'CID1', payeeID: 'PID1', date: 'date', amount: 'amount', egift: 'No', message: 'message'},
        {custID: 'CID2', payeeID: 'PID2', date: 'date', amount: 'amount', egift: 'No', message: 'message'},
        {custID: 'CID3', payeeID: 'PID3', date: 'date', amount: 'amount', egift: 'No', message: 'message'},
        {custID: 'CID4', payeeID: 'PID4', date: 'date', amount: 'amount', egift: 'No', message: 'message'},
    ]

    const columns=[
        {
            title:'CustID', field: 'custID'
        },
        {
            title:'PayeeID', field: 'payeeID'
        }
        ,
        {
            title:'Date', field: 'date'
        }
        ,
        {
            title:'Amount', field: 'amount'
        }
        ,
        {
            title:'eGift', field: 'egift'
        }
        ,
        {
            title:'Message', field: 'message'
        }
    ]

    return (
        <div>
            <MaterialTable title='Transaction Details'
            data={data}
            columns={columns}
            />
        </div>
    )
}
