import { useState, useEffect, React } from 'react'
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap'

export default function Transfer() {

    const [currentUser, setCurrentUser] = useState();
    const [returnedResult, setReturnedResult] = useState();
    const [userInputs,setUserInputs] = useState({payeeID: '', amount: '', eGift: '', message: ''});

    useEffect(() => {
        setCurrentUser(JSON.parse(window.localStorage.getItem('user')))
        return () => {
        }
    }, [])

    const moneyTransfer = () => {
        let accountKey = currentUser.accountKey
        let custID = currentUser.custID
        let payeeID = Number(userInputs.payeeID)
        let amount = Number(userInputs.amount)
        let eGift = true
        if(userInputs.eGift === "Yes"){
            eGift = true
        } else {
            eGift = false
        }
        let message = userInputs.message
        const requestOptions = {
            method: 'POST',
            headers: { "x-api-key": "rcqYXzQ9PY1rQtUNJB9X56JOvnQWnf27S09nX8Rh", },
            body: JSON.stringify({
                custID: custID,
                accountKey: accountKey,
                payeeID: payeeID,
                amount: amount,
                eGift: eGift,
                message: message
            })
        };
        let flag = true
        fetch('https://ipllrj2mq8.execute-api.ap-southeast-1.amazonaws.com/techtrek/transactions/add', requestOptions)
            .then(function (response) {
                if (!response.ok) {
                    flag = false
                    alert("Error")
                }
                return response.json()
            }).then(data => {
                console.log(data)
                if (flag === true && !data.errorMessage ) {
                    setReturnedResult(data.message)
                } else {
                    alert("Error")
                }
            })
    }

    const handleChange = (e) =>{
        const name = e.target.name
        const value = e.target.value
        setUserInputs({...userInputs, [name]: value})
    }

    return (
        <div>
            <Form className="text-left">
                <FormGroup className="py-3">
                    <Label for="payeeID">Payee ID</Label>
                    <Input type="text" name="payeeID" placeholder="Payee ID" value={userInputs.payeeID} onChange={handleChange} />
                </FormGroup>
                <FormGroup className="py-3">
                    <Label for="amount">Amount</Label>
                    <Input type="text" name="amount" placeholder="Amount" value={userInputs.amount} onChange={handleChange}/>
                </FormGroup>
                <FormGroup>
                    <Label for="exampleSelect">Send as e-Gift?</Label>
                    <Input type="select" name="sendas" id="exampleSelect" onChange={handleChange}>
                        <option>No</option>
                        <option>Yes</option>
                    </Input>
                </FormGroup>
                <FormGroup className="py-3">
                    <Label for="message">Message</Label>
                    <Input type="text" name="message" placeholder="Message" value={userInputs.message} onChange={handleChange}/>
                </FormGroup>
                <Button onClick={moneyTransfer}>Submit</Button>
            </Form>
            {
                returnedResult && <>
                    <h1>{returnedResult}</h1>
                </>
            }
        </div>
    )
}
