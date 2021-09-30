import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchCurrencyData } from './features/currency-slice'

export default function App() {
  return (
    <div className="d-flex bg-secondary" style={{ height: '100vh' }}>
      <Table />
    </div>
  )
}

function Table() {
  const currency = useSelector((state) => state.currency.data)
  const dispatch = useDispatch()

  const currencyDataInTable = [
    {name: 'CAD', rate: currency.rates?.CAD},
    {name: 'IDR', rate: currency.rates?.IDR},
    {name: 'JPY', rate: currency.rates?.JPY},
    {name: 'CHF', rate: currency.rates?.CHF},
    {name: 'EUR', rate: currency.rates?.EUR},
    {name: 'USD', rate: currency.rates?.USD},
  ]

  useEffect(() => {
    dispatch(fetchCurrencyData())
  }, [])

  return(
    <div className="m-auto">
      <table className="table table-hover text-center text-white align-middle fs-4" style={{ width: '50rem' }}>
        <thead>
          <tr>
            <th></th>
            <th>WE BUY</th>
            <th>EXCHANGE RATE</th>
            <th>WE SELL</th>
          </tr>
        </thead>
        <tbody>
          {currencyDataInTable.map((c, i) => {
            let currencyName = c.name
            let weBuy = (c.rate - (c.rate * 0.025))?.toFixed(4)
            let exchangeRates = c.rate?.toFixed(4)
            let weSell = (c.rate + (c.rate * 0.025))?.toFixed(4)

            return(
              <tr key={i}>
                <td className="fw-bold">{currencyName}</td>
                <td>{weBuy}</td>
                <td>{exchangeRates}</td>
                <td>{weSell}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
      <div className="text-center text-white">
        <p>* base currency is {currencyDataInTable[4].name}</p>
      </div>
    </div>
  )
}