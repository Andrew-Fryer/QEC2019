import React from 'react'

/*function SubForm (){
    $.ajax({
        url:'http://10.217.205.104:2019/users/register',
        type:'post',
        data:$('#form').serialize(),
        success:function(){
            alert("worked");
        }
    })
}*/

    function clicking(){
        window.location.replace("/Account/");
    }

class NewLogin extends React.Component {
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
                    <p>Please Create Your Account Below: </p> {/*Here the user can create an account which will post the data to the database */}
                    <form action="http://10.217.205.104:2019/users/register" id = "form" method = "POST">
                        <input name="firstName" placeholder="Given Name" type="text"/>
                        <br/>
                        <input name="lastName" placeholder="Surname" type="text"/>
                        <br/>
                        <input name="username" placeholder="username" type="text"/>
                        <br/>
                        <input name="password" placeholder="password" type="password"/>
                        <br/>
                        <button onClick={clicking}>Submit</button>
                    </form>
    
                </div>
            )
        }
    }
    export default NewLogin;
