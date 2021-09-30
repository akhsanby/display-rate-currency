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
            <th>BUY</th>
            <th>EXCHANGE RATE</th>
            <th>SELL</th>
          </tr>
        </thead>
        <tbody>
          {currencyDataInTable.map((c, i) => (
            <tr key={i}>
              <td>{c.name}</td>
              <td>{(c.rate - (c.rate * 0.025)).toFixed(4)}</td>
              <td>{(c.rate).toFixed(4)}</td>
              <td>{(c.rate + (c.rate * 0.025)).toFixed(4)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="text-center text-white">
        <h4>Currency based : {currencyDataInTable[4].name}</h4>
      </div>
    </div>
  )
}