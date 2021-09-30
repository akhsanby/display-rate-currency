import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import currencyReducer from './features/currency-slice'

const store = configureStore({
  reducer: {
    currency: currencyReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
})

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
