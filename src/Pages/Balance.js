import React, { useState, useEffect } from 'react';
import { Container } from 'reactstrap';
import BalanceCard from '../components/BalanceCard';

export default function Balance() {

    const [results, setResults] = useState();

    let currentUser = JSON.parse(window.localStorage.getItem('user'));

    useEffect(() => {
        // POST request using fetch inside useEffect React hook
        const requestOptions = {
            method: 'POST',
            headers: { "x-api-key": "rcqYXzQ9PY1rQtUNJB9X56JOvnQWnf27S09nX8Rh", },
            body: JSON.stringify({
                custID: currentUser.custID,
                accountKey: currentUser.accountKey,
            })
        };
        fetch('https://ipllrj2mq8.execute-api.ap-southeast-1.amazonaws.com/techtrek/accounts', requestOptions)
            .then(response => response.json())
            .then(data => {
                setResults(data);
            });

        // empty dependency array means this effect will only run once (like componentDidMount in classes)
    }, []);

    return (
        <Container className="mt-3 text-left">
            <h2>Bank Balance</h2>
            {
            results && <>
                {
                    results.map((eachBalance,index)=>{
                        return <BalanceCard {...eachBalance} ></BalanceCard>
                    })
                }
            </>
        }
        </Container>

        
    )
}

