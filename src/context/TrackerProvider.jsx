import { createContext } from "react";
import { useState, useEffect } from "react";

	const TrackerContext = createContext()

	const TrackerProvider = ({children}) => {

		const [consulta, setConsulta] = useState('')
		const [ip, setIP] = useState('')
		const [location, setLocation] = useState('')
		const [isp, setIsp] = useState('')
		const [mostrar, setMostrar] = useState(false)

		//Api key generada por la aplicacion al registrarse gratis
		const apiKey = 'at_6IMOp4O09Pxi0cMubNZs6VYdRthnj'
		const url = `https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&ipAddress=${consulta}`
	
		//Funcion para consultar la api https://geo.ipify.org/
	
		const consultarAPI = async () => {
			const respuesta = await fetch(url)
			const resultado = await respuesta.json()
			setIP(resultado.ip)
			setLocation(resultado.location)
			setIsp(resultado.isp)
			setMostrar(true)
		}

		useEffect(() => {
		  	consultarAPI()
		}, [])
		
    	return(
       	 <TrackerContext.Provider 
            	value={{
					consulta,
					setConsulta,
					ip,
					setIP,
					location,
					setLocation,
					isp,
					setIsp,
					mostrar,
					setMostrar,
					consultarAPI
                
           	 }} 
       	 >
           	 {children}
        	</TrackerContext.Provider>
   	 )
	}

	export {
    	TrackerProvider
	}

	export default TrackerContext