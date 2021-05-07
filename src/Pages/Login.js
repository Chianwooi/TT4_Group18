import React, { Component } from 'react'
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap'
import User from '../model/User'
import {useHistory} from 'react-router-dom'

export class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userName: "",
            userPass: ""
        }
        this.userApi = new User();
    }
    

    setToken = token => {
        this.props.setToken(token)
        
    }

    handleSubmit = event => {
        event.preventDefault()
        
        this.userApi.login(this.state.userName,this.state.userPass).then((_)=> {
            this.setToken(this.userApi);
            // if it works , push to next screen
            // this.props.history.push('/balance')
        })
        .catch((err)=>{
            alert("Auth Failed")
        })
    }

    UonChangeHandler = (event) => {
        let userName = event.target.value;
        this.setState({userName: userName})
    }

    PonChangeHandler = (event) => {
        let userPass = event.target.value;
        this.setState({userPass: userPass})
    }

    render() {
        return (
            <div className="p-5 mb-4 bg-light rounded-3">
                <Container className="fluid">
                    <h1 className="mx-auto">Please Login</h1>
                    <h4>test: {this.state.username} {this.state.password}</h4>
                    <Form>
                        <FormGroup className="py-3">
                            <Label for="username">Username</Label>
                            <Input type="text" name="username" placeholder="Username" onChange={this.UonChangeHandler} />
                        </FormGroup>
                        <FormGroup className="py-3">
                            <Label for="password">Password</Label>
                            <Input type="password" name="password" onChange={this.PonChangeHandler} />
                        </FormGroup>
                        <Button onClick={this.handleSubmit}>Submit</Button>
                    </Form>
                </Container>
            </div>
        )
    }
}

export default Login
