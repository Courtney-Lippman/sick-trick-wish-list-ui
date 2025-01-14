import { Component } from 'react';
import './App.css';
import { fetchData } from '../../apiCalls';
import Tricks from '../Tricks/Tricks'
import Form from '../Form/Form'

class App extends Component {
  constructor() {
    super()
    this.state = {
      existingTricks: [],
      error: ''
    }
  }

  componentDidMount() {
    fetchData('')
      .then(data => {
        this.setState({ existingTricks: data})
      })
      .catch(error => {
        this.setState({ error: 'Oops! Something went wrong. Please try again later.' })
      })

  }

  addTrick = (newTrick) => {
    this.setState({ existingTricks: [...this.state.existingTricks, newTrick]})
  }

  render() {
    console.log(this.state.existingTricks)
    return (
      <div className="App">
        <h1>Sick Trick Wish List</h1>
        <Form addTrick={this.addTrick} />
        {this.state.error && <h2>this.state.error</h2>}
        <Tricks existingTricks={this.state.existingTricks} />
      </div>
    );
  }
}

export default App;