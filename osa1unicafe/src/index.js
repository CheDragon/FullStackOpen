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


const Statistics = ({stats}) => (
  <div>
    <h2>statistiikka</h2>
    <Statistic text="hyvä" number={stats.good} />
    <Statistic text="neutraali" number={stats.neutral} />
    <Statistic text="huono" number={stats.bad} />
    <Statistic text="keskiarvo" number={((stats.good-stats.bad)/(stats.good + stats.neutral + stats.bad)).toFixed(1)} />
    <Statistic text="positiivisia" number={(((stats.good)/(stats.good + stats.neutral + stats.bad)) * 100).toFixed(1)} />
  </div>
)

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      good: 0,
      neutral: 0,
      bad: 0
    }
  }

  increaseGood = () => {
    this.setState({ good: this.state.good + 1});
  }

  increaseNeutral = () => {
    this.setState({ neutral: this.state.neutral + 1});
  }

  increaseBad = () => {
    this.setState({ bad: this.state.bad + 1});
  }

  render() {
    return(
      <div>
        <h2>anna palautetta</h2>

        <Button handleClick={ this.increaseGood } text="hyvä" />
        <Button handleClick={ this.increaseNeutral } text="neutraali" />
        <Button handleClick={ this.increaseBad } text="huono" />

        <Statistics stats={ this.state } />

      </div>
    )
  }
}


ReactDOM.render(<App />, document.getElementById('root'));
