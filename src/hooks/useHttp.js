import { useState, useCallback } from "react";

function useHttp(requestConfig, handleDataFn) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const sendRequest = useCallback(async (dataRequest, deleteId) => {
    setIsLoading(true);

    setError(false);
    try {
      const sendRequest = await fetch(
        deleteId ? `${requestConfig.url}/${deleteId}.json` : requestConfig.url,
        {
          method: requestConfig.method ? requestConfig.method : "GET",
          headers: {
            "Content-Type": "application/json",
          },
          body: dataRequest ? JSON.stringify(dataRequest) : null, // body data type must match "Content-Type" header
        }
      );

      if (sendRequest.status != 200) {
        throw new Error("SomeThing Went Wrong");
        console.log(error);
        setError(true);
      }
      setIsLoading(false);

      const data = await sendRequest.json();

      handleDataFn(data);
    } catch (err) {
      throw err;
    }
  }, []);

  return {
    isLoading,
    error,
    sendRequest,
  };
}

export default useHttp;
