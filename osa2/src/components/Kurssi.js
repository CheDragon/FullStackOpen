import React from 'react'


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


export default Kurssi
