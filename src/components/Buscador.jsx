import {useState} from 'react'
import useTracker from '../hooks/useTracker'
import Arrow from '../images/icon-arrow.svg'

const Buscador = () => {

    //GLOBALES
    const {consulta, setConsulta, setMostrar, consultarAPI } = useTracker()
    const [alerta, setAlerta] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        setConsulta('')
        setMostrar(false)
        if(consulta === ''){
            setAlerta('**Ingresa una direccion IP valida**')
            return;
        }
        setAlerta('')
        //Consulta a la API
        consultarAPI()
    }

  return (
    <>
    <form className='contenedor  hacia-arriba '>
    {alerta && <p className='text-red-600'>{alerta}</p>}
    <div className='flex md:items-center md:w-1/2 md:mx-auto'>
    <input className='p-5 rounded-l-3xl w-full cursor-pointer ' type="text" placeholder='Search for any IP address or domain' onBlur={e => setConsulta(e.target.value)}/>
        <button onClick={handleSubmit} className='p-10 rounded-r-3xl  bg-black hover:bg-gray-700 duration-300 '>
            <img src={Arrow} alt="Icon arrow" />
        </button>
    </div>
        
    </form>
    </>
    
    
  )
}

export default Buscador