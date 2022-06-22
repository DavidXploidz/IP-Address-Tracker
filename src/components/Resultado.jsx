import React from 'react'
import useTracker from '../hooks/useTracker'

const Resultado = () => {

    const {ip, location, isp, mostrar} = useTracker()

  return (
    <>
    {mostrar && ( 
        <div className='bg-white p-5 shadow-xl contenedor rounded-3xl mas-arriba md:grid grid-cols-4  md:gap-x-10 md:divide-x md:justify-start md:h-auto '>
            <span className='span-resultado'>
                IP Address
                <p className='p-resultado'>{ip}</p>
            </span>
            <span  className='span-resultado'>
                Location
                <p className='p-resultado'>{location.city}, {location.region} {location.postalCode}</p>
            </span>
            <span  className='span-resultado'>
                Timezone
                <p className='p-resultado'>UTC {location.timezone}</p>
            </span>
            <span  className='span-resultado'>
                ISP
                <p className='p-resultado'>{isp}</p>
            </span>
        </div> 
    )}
        
    </>
  )
}

export default Resultado