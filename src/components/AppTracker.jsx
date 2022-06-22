import React from 'react'
import Buscador from './Buscador'
import Header from './Header'
import Mapa from './Mapa'
import Resultado from './Resultado'


const AppTracker = () => {
  return (
    <main className='text-center'>
        <Header />
        <Buscador />
        <Resultado />
        <Mapa />
    </main>
  )
}

export default AppTracker