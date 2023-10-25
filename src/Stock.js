import React, { useEffect, useState } from "react";

const Stock = () => {
  const [data, setData] = useState();
  const [search, setSearch] = useState("");
  const [stockList, setStockList] = useState([]);
  const apiKey = "cRfppcxRAwpQqZqnBxEGkgHT22KwIQ2i";
  const stocks = ["AAPL", "MSFT", "NVDA", "DIS", "COST"];
  const endpoint = 'v2/aggs/ticker/';
  // const item = "AAPL";


  useEffect(() => {
    //loop .forEach()like map
    stocks.forEach((item) => {
      fetch(
        `https://api.polygon.io/${endpoint}${item}/prev?unadjusted=true&apiKey=${apiKey}`
      )
        .then((response) => response.json())
        .then((data) => {
          console.log(data.results[0].h)
          const price = data.results[0].h;
          stockList && setStockList((prevStockList) => [...prevStockList, price]);
        });
    });
  }, []);

  // const searchHandler = () => {
  //   if (search) {
  //     fetch(
  //       `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${search}&apikey=${key}`
  //     )
  //       .then((response) => response.json())
  //       .then((data) => {
  //         const price = data["Global Quote"]["05. price"];
  //         setStockList((prevStockList) => [...prevStockList, price]);
  //       });
  //   }
  // };

  return (
    <div>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Please enter stock name"
      />
    {/* button */}
      <div>
        {stockList.map((data, index) => (
          <div>
            Stock no {index + 1} = {data}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stock;
