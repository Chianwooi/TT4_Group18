import React, { useState } from 'react'
import { Button, Card, CardBody, CardText, CardTitle, Container, List } from 'reactstrap';

export default function Home(props) {

    const [user, setUser] = useState(JSON.parse(props.user))
    return (
        <Container className="mt-3">
            <Card>
                <CardBody className="text-left">
                    <CardTitle tag="h5">Hi {user.firstName},</CardTitle>
                    <CardText>Here's your details:</CardText>
                    <List type="unstyled">
                        <li><b>Name:</b> {user.firstName} {user.lastName}</li>
                        <li><b>Gender:</b> {user.gender}</li>
                        <li><b>Age:</b> {user.age}</li>
                        <li><b>Email:</b> {user.email} </li>
                        <li><b>NRIC:</b> {user.nric}</li>
                        <li><b>Phone No.:</b> {user.phoneNumber}</li>
                        <li><b>Address:</b> {user.address}</li>
                    </List>

                    <Button href='/balance'>See Account Balance</Button>
                    <Button className="mx-5" color="primary" href='/transfer'>Make a transfer</Button>
                </CardBody>
            </Card>
        </Container>
    )
}
