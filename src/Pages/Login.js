import React, { Component } from 'react'
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap'

export class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {...this.state}
    }

    setToken = token => {
        this.props.setToken(token)
        
    }

    handleSubmit = event =>{
        event.preventDefault()

        const user = {
            userName: this.state.username,
            userPass: this.state.password
        }
        console.log("state", this.state)
        this.setToken('123')
        

        // axios.post(`https://jsonplaceholder.typicode.com/users`, { user })
        // .then(res => {
        //   console.log(res);
        //   console.log(res.data);
        // })
    }

    onChangeHandler= (event) =>{
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({[nam]:val})
    }
    
    render() {
        return (
            <div className="p-5 mb-4 bg-light rounded-3">
                <Container className="fluid">
                <h1 className="mx-auto">Please Login</h1>
                <h4>test: {this.state.username} {this.state.password}</h4>
                    <Form onSubmit={this.handleSubmit}>
                        <FormGroup className="py-3">
                            <Label for="username">Username</Label>
                            <Input type="text" name="username" placeholder="Username" onChange={this.onChangeHandler} />
                        </FormGroup>
                        <FormGroup className="py-3">
                            <Label for="password">Password</Label>
                            <Input type="password" name="password" onChange={this.onChangeHandler} />
                        </FormGroup>
                        <Button>Submit</Button>
                    </Form>
                </Container>
            </div>
        )
    }
}

export default Login
