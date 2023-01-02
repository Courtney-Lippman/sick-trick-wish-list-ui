import React, { Component } from 'react'
import './Form.css'

class Form extends Component {
    constructor() {
        super()
        this.state = {
            stance: '', 
            name: '', 
            obstacle: '', 
            tutorial: ''
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <form>
                <input
                type='text'
                placeholder='Name of Trick'
                name='name'
                value={this.state.name}
                onChange={event => this.handleChange(event)}
                />
                <button>Send it!</button>
            </form>
        )
    }
}

export default Form