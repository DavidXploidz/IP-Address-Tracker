import { useContext } from "react";
	import TrackerContext from '../context/TrackerProvider'


	const useTracker = () => {

    		return useContext(TrackerContext)

	}

	export default useTracker