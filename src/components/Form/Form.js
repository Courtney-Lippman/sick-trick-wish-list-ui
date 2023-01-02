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
                <select
                    value={this.state.stance}
                    name='stance'
                    onChange={this.handleChange}
                >
                    <option value=''>Pick a stance!</option>
                    <option value='regular'>regular</option>
                    <option value='switch'>switch</option>
                </select>
                <input
                    type='text'
                    placeholder='Name of Trick'
                    name='name'
                    value={this.state.name}
                    onChange={event => this.handleChange(event)}
                />
                <select
                    value={this.state.obstacle}
                    name='obstacle'
                    onChange={this.handleChange}
                >
                    <option value=''>Pick an obstacle</option>
                    <option value='flatground'>flatground</option>
                    <option value='ledge'>ledge</option>
                    <option value='rail'>rail</option>
                    <option value='stairs'>stairs</option>
                    <option value='pool'>pool</option>
                </select>
                <input
                    type='text'
                    placeholder='Link to Tutorial'
                    name='tutorial'
                    value={this.state.tutorial}
                    onChange={event => this.handleChange(event)}
                />
                <button>Send it!</button>
            </form>
        )
    }
}

export default Form