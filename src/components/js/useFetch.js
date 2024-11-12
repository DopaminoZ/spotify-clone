import React, { useState, useEffect} from "react";

const useFetch = (url) => {

    const [error, setError] = useState(null);
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);

    useEffect(() => {
      const abortController = new AbortController();

      setTimeout(() => {
      fetch(url, {signal:abortController.signal})
      .then(res => {
        if(!res.ok){
          console.log(res)
          throw new Error('Couldn\'t fetch the data from the server, please try again later...');
        }
        return res.json()
      })
      .then((data) => {
        console.log(data);
        setData(data);
        setIsPending(false);
        setError(null);
      })
      .catch(error => {
        if(error.name === "AbortError"){
          console.log("Fetch aborted")
        }
        else{
        setIsPending(false);
        setError(error.message);
        console.log(error.message)
        }
      })
    }, 1000);
    return () => abortController.abort();
    }, [url]);

    return {error, data, isPending};
};
export default useFetch;