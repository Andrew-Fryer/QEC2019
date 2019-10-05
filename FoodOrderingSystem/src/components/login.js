import React from 'react'

class Login extends React.Component {
    constructor(props){
        super(props);

    }
    render(){
        return (
            <div>
                <h1>Hello There and Welcome to Our Website!</h1>
                <p>Please Login: </p>
                <form>
                    <input name="username" placeholder="username" type="text"/>
                    <br/>
                    <input name="password" type="password"/>
                </form>
            </div>
        )
    }
}
export default Login;