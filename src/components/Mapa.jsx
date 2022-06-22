import {useState, useEffect} from 'react'
import { MapContainer } from 'react-leaflet/MapContainer'
import { TileLayer } from 'react-leaflet/TileLayer'
import { Marker } from 'react-leaflet'
import { Popup } from 'react-leaflet'
import useTracker from '../hooks/useTracker'
const Mapa = () => {

    const {location, mostrar} = useTracker()
    const {lat, lng, city, postalCode} = location

  return (
    <>
    {mostrar && (
        <div>
        {/* //Esta la saque de https://react-leaflet.js.org/docs/start-setup/ se puede intalar con npm */}
        <MapContainer center={[lat, lng]} zoom={20} scrollWheelZoom={false} className="mapa">
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[lat, lng]}>
                <Popup className='text-2xl'>
                    {city} <br /> {postalCode}
                </Popup>
            </Marker>
        </MapContainer>
        </div>
    )}
    </>
  )
}

export default Mapa