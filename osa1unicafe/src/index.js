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

  calculateKeskiarvo() {
    let keskiarvo = (this.state.good-this.state.bad)/(this.state.good + this.state.neutral + this.state.bad);

    if( isNaN(keskiarvo) ){
      return 0;
    } else {
      return keskiarvo.toFixed(1);
    }

  }

  calculatePositiivisia() {
    let positiivisia = ((this.state.good)/(this.state.good + this.state.neutral + this.state.bad)) * 100;

    if( isNaN(positiivisia) ){
      return 0;
    } else {
      return positiivisia.toFixed(1);
    }
  }

  render() {
    return(
      <div>
        <h2>anna palautetta</h2>

        <button onClick={ () => this.setState({ good: this.state.good + 1}) }>hyvä</button>
        <button onClick={ () => this.setState({ neutral: this.state.neutral + 1}) }>neutraali</button>
        <button onClick={ () => this.setState({ bad: this.state.bad + 1}) }>huono</button>

        <h2>statistiikka</h2>
        hyvä: { this.state.good } <br/>
        neutraali { this.state.neutral }<br/>
        huono { this.state.bad }<br/>
        keskiarvo { this.calculateKeskiarvo() }<br/>
        positiivisia { this.calculatePositiivisia() } %<br/>

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
