import React, { useEffect, useState } from 'react';
import { Card, CardBody, CardText, CardTitle, List } from 'reactstrap';

const BalanceCard = (props) => {
    useEffect(() => {
        console.log(props);
    }, [])

    return (
        <Card>
        <CardBody className="text-left">
            <CardTitle tag="h5">{props.accountName}</CardTitle>
            { props.accountName == 'Multiplier Account' && <CardText>Your Default Account</CardText>}
                 <div className="balance-card">
                     <List type="unstyled">
                            <li><b>Account Number:</b> {props.accountNumber}</li>
                            <li><b>Available Balance:</b> {props.availableBal}</li>
                     </List>
                 </div>
        </CardBody>
    </Card>

    );
}

export default BalanceCard;