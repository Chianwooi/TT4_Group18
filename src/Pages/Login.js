import React, { Component } from 'react'
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap'
import { withRouter } from "react-router-dom";
import User from '../model/User'

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userName: "",
            userPass: "",
        }
        this.userApi = new User();
    }

    componentDidMount() {
        let user = localStorage.getItem('user')
        if(user != null){
            this.props.history.push('/home')
        }
      }


    handleSubmit = event => {
        event.preventDefault()
        console.log(this.props)
        this.userApi.login(this.state.userName,this.state.userPass).then((_)=> {
            // if it works , push to next screen
            console.log(localStorage.getItem('user'))
            this.props.history.push('/home')
            
        })
        .catch((err)=>{
            console.log(err)
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
                    <Form className="text-left">
                        <FormGroup className="py-3">
                            <Label for="username">Username</Label>
                            <Input type="text" name="username" placeholder="Username" onChange={this.UonChangeHandler} />
                        </FormGroup>
                        <FormGroup className="py-3">
                            <Label for="password">Password</Label>
                            <Input type="password" name="password" placeholder="Password" onChange={this.PonChangeHandler} />
                        </FormGroup>
                        <Button onClick={this.handleSubmit}>Submit</Button>
                    </Form>
                </Container>
            </div>
        )
    }
}

export default withRouter(Login)
