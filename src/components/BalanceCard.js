import React, { useEffect, useState } from 'react';

const BalanceCard = (props) => {
    useEffect(() => {
        console.log(props);
    }, [])

    return (
        <div className="balance-card">
            <p>Name: {props.accountName}</p>
            <p>Account Number: {props.accountNumber}</p>
            <p>Available Balance: {props.availableBal} </p>
        </div>
    );
}

export default BalanceCard;