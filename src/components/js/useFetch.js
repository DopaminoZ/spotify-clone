import React, { useState, useEffect} from "react";

const useFetch = (url) => {

    const [error, setError] = useState(null);
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);

    useEffect(() => {
      setTimeout(() => {
      fetch(url)
      .then(res => {
        if(!res.ok){
          throw Error('Couldn\'t fetch the data from the server, please try again later...');
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
        setIsPending(false);
        setError(error.message);
      })
    }, 1000);
    }, [url]);

    return {error, data, isPending};
};
export default useFetch;