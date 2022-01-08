import React, { useCallback, useState } from "react";

const useHttp = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  /**
   * A callback function that sends an http request defined by config parameter.
   */
  const sendRequest = useCallback(async (requestConfig, setData) => {
    setLoading(true);
    setError("");
    const config = {
      method: requestConfig.method ? requestConfig.method : "GET",
      body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
      headers: requestConfig.headers ? requestConfig.header : {},
    };

    try {
        const jsonResponse = await fetch(requestConfig.url, config);
      if (!jsonResponse.ok)
        throw new Error("An error occurred while retrieving data.");
      const dataObj = await jsonResponse.json();
      if (setData != null) setData(dataObj);   
    } catch (err) {
        const er =  new Error(err)
        setError(er.message);
    }

    setLoading(false)
  }, []);

  return {
    sendRequest: sendRequest,
    loading: loading,
    error: error,
  };
};

export default useHttp;
