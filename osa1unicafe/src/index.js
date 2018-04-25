import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Button = ({ handleClick, text }) => {

  return (
    <button onClick={ handleClick }>
      { text }
    </button>
  )
}



const Statistic = ({text, number}) => {

  if( !isNaN(number) && (text === 'positiivisia') ){
    return (   <div>{ text }  { number } % </div> );
  } else if( !isNaN(number) ){
    return ( <div>{ text } { number }</div> );
  } else if( isNaN(number) )
    return ( <div>{ text } 0</div> );
}


const Statistics = ({stats}) => {


  if( stats.good === 0 && stats.neutral === 0 && stats.bad === 0  ){
    return (
      <div>
        <h2>statistiikka</h2>
        ei yhtään palautetta annettu
      </div>
    )
  } else {
    return(
      <div>
        <h2>statistiikka</h2>
        <Statistic text="hyvä" number={stats.good} />
        <Statistic text="neutraali" number={stats.neutral} />
        <Statistic text="huono" number={stats.bad} />
        <Statistic text="keskiarvo" number={((stats.good-stats.bad)/(stats.good + stats.neutral + stats.bad)).toFixed(1)} />
        <Statistic text="positiivisia" number={(((stats.good)/(stats.good + stats.neutral + stats.bad)) * 100).toFixed(1)} />
      </div>
    )
  }
}

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      good: 0,
      neutral: 0,
      bad: 0
    }
  }

  increaseStats = (stateToIncrease) => {
    this.setState({ [stateToIncrease]: this.state[stateToIncrease] + 1});
  }

  render() {
    return(
      <div>
        <h2>anna palautetta</h2>

        <Button handleClick={ () => this.increaseStats("good") } text="hyvä" />
        <Button handleClick={ () => this.increaseStats("neutral") } text="neutraali" />
        <Button handleClick={ () => this.increaseStats("bad") } text="huono" />

        <Statistics stats={ this.state } />

      </div>
    )
  }
}


ReactDOM.render(<App />, document.getElementById('root'));
