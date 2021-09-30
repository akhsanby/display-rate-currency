import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchCurrencyData } from './features/currency-slice'

export default function App() {
  return (
    <div className="d-flex" style={{ height: '100vh' }}>
      <Table />
    </div>
  )
}

function Table() {
  const currency = useSelector((state) => state.currency.data)
  const dispatch = useDispatch()

  const currencyDataInTable = [
    {name: 'CAD', rate: currency.rates.CAD},
    {name: 'IDR', rate: currency.base}
  ]

  useEffect(() => {
    dispatch(fetchCurrencyData())
  }, [])

  return(
    <div className="m-auto">
      <table className="table table-borderless table-hover text-center align-middle fs-5" style={{ width: '50rem' }}>
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
            <tr>
              <td>{c.name}</td>
              <td>s</td>
              <td>{c.rate}</td>
              <td>d</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}