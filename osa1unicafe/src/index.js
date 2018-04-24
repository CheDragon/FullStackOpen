import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


class Palautetta extends React.Component {
  constructor() {
    super()
    this.state = {
      good: 0,
      neutral: 0,
      bad: 0
    }
  }

  render() {

    return(
      <div>
        <h2>anna palautetta</h2>

        <button onClick={ () => this.setState({ good: this.state.good + 1 }) }>hyvä</button>
        <button onClick={ () => this.setState({ neutral: this.state.neutral + 1 }) }>neutraali</button>
        <button onClick={ () => this.setState({ bad: this.state.bad + 1 }) }>huono</button>

        <h2>statistiikka</h2>
        hyvä: { this.state.good } <br/>
        neutraali { this.state.neutral }<br/>
        huono { this.state.bad }<br/>


      </div>
    )
  }
}



const App = () => {

  return(
    <div>
      <Palautetta />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));
