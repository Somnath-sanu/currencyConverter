import { useEffect } from "react";
import { useState } from "react";

const useCurrencyData = (currency) => { //! Custon Hook
  
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
    )
      .then((res) => res.json())
      .then((res) => setData(res[currency]))
      .catch((err) => console.log("Data Fetching Error ",err));
  }, [currency]);

  // console.log(data)
  return data;
};

export { useCurrencyData };
