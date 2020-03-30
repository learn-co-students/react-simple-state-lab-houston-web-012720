import React, {Component} from 'react'

export default class Cell extends Component{
    constructor(props){
        super()

        this.state = {
            color: props.value
        }
    }

    converse_hex_value = () => {
        this.setState({
            color: '#333'
        })
    }

    render() {
        return(
            <div 
                onClick={this.converse_hex_value}
                className="cell" 
                style={{backgroundColor: this.state.color}} >
                    hello
            </div>
        )
    }
}