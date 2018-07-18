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

// const Yhteensa = (props) => {
//   return (
//     <div>
//       <p>yhteensä { props.kurssi.osat[0].tehtavia + props.kurssi.osat[1].tehtavia + props.kurssi.osat[2].tehtavia } tehtävää</p>
//     </div>
//   )
// }


const Kurssi = (props) => {
  const kurssi = props.kurssi
  return (

    <div>
      <Otsikko  kurssi={ kurssi } />
      <Sisalto  kurssi={ kurssi } />
      {/*  <Yhteensa kurssi={ kurssi } />*/ }
    </div>
  )
}


const App = () => {
  const kurssi = {
    nimi: 'Half Stack -sovelluskehitys',
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
  }

  return (
    <div>
      <Kurssi kurssi={kurssi} />
    </div>
  )
}



ReactDOM.render(
  <App />,
  document.getElementById('root')
)
