import {TrackerProvider} from './context/TrackerProvider'
import AppTracker from "./components/AppTracker"

	function App() {


  	return (
    	<TrackerProvider>
      	<AppTracker /> 
    	</TrackerProvider>
    
 	 )
	}

	export default App