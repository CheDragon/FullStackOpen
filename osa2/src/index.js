import React from 'react'
import ReactDOM from 'react-dom'


const Otsikko = (props) => {

  return (
    <div>
      <h1>{ props.kurssi.nimi }</h1>
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
  const osat = props.kurssi.osat
  return (
    <div>
      {osat.map(osat => <Osa key={osat.id} osa={osat.nimi} task={osat.tehtavia}/>)}
    </div>
  )
}

const Yhteensa = (props) => {
  const osat = props.kurssi.osat

  var yhteensa = osat.reduce( ( accumulator, currentValue ) => accumulator + currentValue.tehtavia, 0);

  return (
    <div>
      <p>yhteensä { yhteensa } tehtävää</p>
    </div>
  )
}


const Kurssi = (props) => {
  const kurssi = props.kurssi
  return (

    <div>
      <Otsikko  kurssi={ kurssi } />
      <Sisalto  kurssi={ kurssi } />
      <Yhteensa kurssi={ kurssi } />
    </div>
  )
}


const App = () => {
  const kurssit = [
  {
    nimi: 'Half Stack -sovelluskehitys',
    id: 1,
    osat: [
      {
        nimi: 'Reactin perusteet',
        tehtavia: 10,
        id: 1
      },
      {
        nimi: 'Tiedonvälitys propseilla',
        tehtavia: 7,
        id: 2
      },
      {
        nimi: 'Komponenttien tila',
        tehtavia: 14,
        id: 3
      }
    ]
  },
  {
    nimi: 'Node.js',
    id: 2,
    osat: [
      {
        nimi: 'Routing',
        tehtavia: 3,
        id: 1
      },
      {
        nimi: 'Middlewaret',
        tehtavia: 7,
        id: 2
      }
    ]
  }
]

  return (
    <div>
      {kurssit.map((kurssi , i) => <Kurssi key={i} kurssi={kurssi} />)}
    </div>
  )
}



ReactDOM.render(
  <App />,
  document.getElementById('root')
)
