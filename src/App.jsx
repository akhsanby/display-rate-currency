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
  const { CAD, IDR, JPY, CHF, EUR, USD } = useSelector((state) => state.currency.rates)
  const dispatch = useDispatch()

  const currencyDataInTable = [
    {name: 'CAD', rate: CAD},
    {name: 'IDR', rate: IDR},
    {name: 'JPY', rate: JPY},
    {name: 'CHF', rate: CHF},
    {name: 'EUR', rate: EUR},
    {name: 'USD', rate: USD},
  ]

  useEffect(() => {
    dispatch(fetchCurrencyData())
  }, [])

  return(
    <div className="m-auto">
      <table className="table table-borderless table-hover text-center text-white align-middle fs-4" style={{ width: '50rem' }}>
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
            let weBuy = (c.rate - (c.rate * 0.025))?.toFixed(4)
            let exchangeRates = c.rate?.toFixed(4)
            let weSell = (c.rate + (c.rate * 0.025))?.toFixed(4)

            return(
              <tr key={i}>
                <td className="fw-bold">{c.name}</td>
                <td>{weBuy}</td>
                <td>{exchangeRates}</td>
                <td>{weSell}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
      <div className="text-center text-white">
        <h4>Currency based : {currencyDataInTable[4].name}</h4>
      </div>
    </div>
  )
}