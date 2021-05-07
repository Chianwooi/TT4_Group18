import React, { useState, useEffect } from 'react'
import MaterialTable from 'material-table'
export default function History() {
    const [results, setResults] = useState([]);
    const [currentUser, setCurrentUser] = useState();
    // useEffect(() => {
    //     setCurrentUser(JSON.parse(window.localStorage.getItem('user')))
    //     viewHistory() // comment this out, for test only
    //     return () => {
    //     }
    // }, [])
    // const viewHistory = () => {
    //     let accountKey = currentUser.accountKey
    //     let custID = currentUser.custID
    //     const requestOptions = {
    //         method: 'POST',
    //         headers: { "x-api-key": "rcqYXzQ9PY1rQtUNJB9X56JOvnQWnf27S09nX8Rh", },
    //         body: JSON.stringify({
    //             custID: custID,
    //             accountKey: accountKey
    //         })
    //     };
    //     fetch('https://ipllrj2mq8.execute-api.ap-southeast-1.amazonaws.com/techtrek/transactions/view', requestOptions)
    //         .then(function (response) {
    //             if (!response.ok) {
    //                 alert("Error")
    //             }
    //             return response.json()
    //         }).then(data => {
    //             // SUCESS 
    //             console.log(data)
    //             setResults(results)
    //         })
    // }
    const data = [
        { custID: 18, payeeID: 0, date: 1620367241, amount: 1, egift: 'false', message: "Hello World" },
        { custID: 18, payeeID: 1, date: 1610957880, amount: 632.51, egift: 'false', message: "thank you" },
        { custID: 18, payeeID: 2, date: 1610957880, amount: 750.62, egift: 'false', message: 'Lunch' },
        { custID: 18, payeeID: 3, date: 1610957880, amount: 750.62, egift: 'false', message: '' },
        { custID: 18, payeeID: 4, date: 1610957880, amount: 74.41, egift: 'false', message: '' },
        { custID: 18, payeeID: 5, date: 1610957880, amount: 460.08, egift: 'false', message: 'DBS' },
    ]
    const columns = [
        {
            title: 'CustID', field: 'custID'
        },
        {
            title: 'PayeeID', field: 'payeeID'
        }
        ,
        {
            title: 'Date', field: 'date'
        }
        ,
        {
            title: 'Amount', field: 'amount'
        }
        ,
        {
            title: 'eGift', field: 'egift'
        }
        ,
        {
            title: 'Message', field: 'message'
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