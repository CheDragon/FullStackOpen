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
      <Osa osa={ props.osa1.nimi } task={ props.osa1.tehtavia } />
      <Osa osa={ props.osa2.nimi } task={ props.osa2.tehtavia } />
      <Osa osa={ props.osa3.nimi } task={ props.osa3.tehtavia } />
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
  const osa1 = {
    nimi: 'Reactin perusteet',
    tehtavia: 10
  }
  const osa2 = {
    nimi: 'Tiedonvälitys propseilla',
    tehtavia: 7
  }
  const osa3 = {
    nimi: 'Komponenttien tila',
    tehtavia: 14
  }

  return (
    <div>
      <Otsikko kurssi={ kurssi } />
      <Sisalto osa1={ osa1 } osa2={ osa2 } osa3={ osa3 } />
      <Yhteensa total={ osa1.tehtavia + osa2.tehtavia + osa3.tehtavia } />
    </div>
  )
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
)
