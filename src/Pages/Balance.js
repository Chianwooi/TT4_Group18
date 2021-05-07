import React, { useState, useEffect } from 'react';
import BalanceCard from '../components/BalanceCard';

export default function Balance() {

    // const [results, setResults] = useState([]);
    const [results, setResults] = useState();

    let currentUser = JSON.parse(window.localStorage.getItem('user'));

    // console.log(currentUser.custID);
    // console.log(currentUser.accountKey);

    // const currentUserID = currentUser.custID; 
    // console.log(currentUserID);

    useEffect(() => {
        // POST request using fetch inside useEffect React hook
        const requestOptions = {
            method: 'POST',
            headers: { "x-api-key": "rcqYXzQ9PY1rQtUNJB9X56JOvnQWnf27S09nX8Rh", },
            body: JSON.stringify({
                custID: currentUser.custID,
                accountKey: currentUser.accountKey,
                // userPass: "lIozkWgKHpyJvs0" 
            })
        };
        fetch('https://ipllrj2mq8.execute-api.ap-southeast-1.amazonaws.com/techtrek/accounts', requestOptions)
            .then(response => response.json())
            .then(data => {
                // console.log(data);
                setResults(data);
                // console.log(results);
            });

        // empty dependency array means this effect will only run once (like componentDidMount in classes)
    }, []);

    return (

        <div>
            <h1>testing balance Page</h1>
            <p>This is the users current balance right now</p>
            {
                results && <>
                    {
                        results.map((eachBalance,index)=>{
                            return <BalanceCard {...eachBalance} ></BalanceCard>
                        })
                    }
                </>
            }
            {/* { results.map( (result, index) =>{
                return(
                <BalanceCard
                    key= {index}
                    accountName = {result.accountName}
                    accountNumber = {result.accountNumber}
                    availableBal = {result.availableBal}
                />)
            })} */}
        </div>
    )
}

