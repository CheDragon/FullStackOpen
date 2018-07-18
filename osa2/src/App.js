import React from 'react'
import Kurssi from './components/Kurssi'

const App = ({kurssit}) => {
  return (
    <div>
      {kurssit.map((kurssi , i) => <Kurssi key={i} kurssi={kurssi} />)}
    </div>
  )
}

export default App
