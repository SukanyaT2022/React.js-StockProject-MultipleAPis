import React, { useEffect, useState } from 'react'

const Stock = () => {
const [data, setData]=useState()
let key = "AYPOQ7UULZ1V58UL";
let stock = "Meta";
let URL = `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${stock}&apikey=AYPOQ7UULZ1V58UL`
    useEffect(()=>{
      fetch(URL)
      .then((response)=>response.json())
      .then(data=>{
        console.log(data)
      })
      fetch(URL)
      .then((response)=>response.json())
      .then(data=>{
        console.log(data)
      })
      fetch(URL)
      .then((response)=>response.json())
      .then(data=>{
        console.log(data)
      })
      data && console.log(data)
    },[])

  return (
    <div> 
    </div>
  )
}

export default Stock
