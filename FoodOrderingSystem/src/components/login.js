import React from 'react'

class Login extends React.Component {
    constructor(props){
        super(props);

    }
    render(){
        return (
            <div style = {{
                margin: `auto`,
                width: `80%`,
                padding: `5px`

              }}>
                <p>Please Login: </p>
                <form>
                    <input name="username" placeholder="username" type="text"/>
                    <br/>
                    <input name="password" placeholder="password" type="password"/>
                </form>
            </div>
        )
    }
}
export default Login;