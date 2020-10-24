import { useState, useEffect } from "react";

export function useFetch(url) {
    const [ response, setResponse ] = useState(null);
    const [ isLoading, setLoading ] = useState(false);
    const [ error, setError ] = useState(null);
     
    useEffect(() => {
        let isFetching = false;

        console.log('renders...')
        
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await fetch(url);
                const data = await response.json();
                if (!isFetching) {
                    setResponse(data);
                }
            } catch(err) {
                if (!isFetching) {
                    setError(err);
                }
            } finally {
                if (!isFetching) {
                    setLoading(false);
                }
            }
         };

         fetchData();

         return function cleanup() {
             console.log('runs during cleanup..');
             isFetching = true;
         }
     }, [url]);
    
    return { response, isLoading, error };
}