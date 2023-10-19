import React, { useEffect, useState } from 'react'

const Stock = () => {
const [data, setData]=useState()
const [search, setSearch]=useState()

const [stockList,setStockList] = useState([]);

let key = "AYPOQ7UULZ1V58UL";
let URL = `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${search}&apikey=key
`
    const searchHandler = ()=>{
      fetch(URL)
      .then((response)=>response.json())
      .then(data=>{
        data["Global Quote"]['05. price'];
      })
    }

    useEffect(()=>{
      fetch(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=AAPL&apikey=key`)
      .then((response)=>response.json())
      .then(data=>{
        // console.log(data["Global Quote"]['05. price'])
        setStockList(data["Global Quote"]['05. price'])
      })
      fetch(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=MSFT&apikey=key`)
      .then((response)=>response.json())
      .then(data=>{
        console.log(data["Global Quote"]['05. price'])
        setStockList((prev)=>[...prev,...data["Global Quote"]['05. price']])
      })
    },[])
    
  return (
    <div> 
      {/* <input type='text' 
          value={search} 
          onChange = {(e)=>setSearch(e.target.value)} 
          placeholder='Please enter stock name'
        />
      <button onClick={searchHandler}>Search</button> */}

      <div>
        <h3>Apple: ${stockList && stockList}</h3> 
        <h3>Microsoft</h3>
        <h3>Meta</h3>
      </div>

    </div>
  )
}

export default Stock
