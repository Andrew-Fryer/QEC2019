import React from 'react'

// This file is broken!

class Input extends React.Component {
    constructor(props){
        super(props);

    }

    render(){
        return (
            <div>
                <form>
                    <input name = "Ingredient" placeholder="What's in your fridge?" type="text"/>
                </form>
            </div>
        )
    }
}

export default Input;