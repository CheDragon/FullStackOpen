import React from 'react'
import ReactDOM from 'react-dom'


const Otsikko = (props) => {

  return (
    <div>
      <h1>{ props.kurssi }</h1>
    </div>
  )
}

const Osa = (props) => {

  return (
    <div>
      <p>{ props.osa } { props.task } </p>
    </div>
  )
}

const Sisalto = (props) => {

  return (
    <div>
      <Osa osa={props.osa1} task={props.tehtavia1} />
      <Osa osa={props.osa2} task={props.tehtavia2} />
      <Osa osa={props.osa3} task={props.tehtavia3} />
    </div>
  )
}

const Yhteensa = (props) => {

  return (
    <div>
      <p>yhteensä { props.total } tehtävää</p>
    </div>
  )
}

const App = () => {

  const kurssi = 'Half Stack -sovelluskehitys'
  const osa1 = 'Reactin perusteet'
  const tehtavia1 = 10
  const osa2 = 'Tiedonvälitys propseilla'
  const tehtavia2 = 7
  const osa3 = 'Komponenttien tila'
  const tehtavia3 = 14

  return (
    <div>
      <Otsikko kurssi={ kurssi } />
      <Sisalto osa1={ osa1 } tehtavia1={ tehtavia1 } osa2={ osa2 } tehtavia2={ tehtavia2 } osa3={ osa3 } tehtavia3={ tehtavia3 }/>
      <Yhteensa total={ tehtavia1 + tehtavia2 + tehtavia3 } />
    </div>
  )
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
)
