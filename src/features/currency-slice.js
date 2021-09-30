import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import API_URL from '../config'

const initialState = {
	data: {},
	loading: false,
	error: null,
}

export const fetchCurrencyData = createAsyncThunk(
	'currency/fetchCurrencyData',
	async () => {
		try {
			const response = await axios.get(API_URL)
			return response.data
		} catch(error) {
			throw new Error(error)
		}
	}
)

export const currencySlice = createSlice({
	name: 'currency',
	initialState,
	extraReducers: {
		[fetchCurrencyData.pending]: (state, action) => {
			state.loading = true
			state.error = null
		},
		[fetchCurrencyData.fulfilled]: (state, action) => {
			state.data = action.payload
			state.loading = false
		},
		[fetchCurrencyData.rejected]: (state, action) => {
			state.error = action.error.message
			state.loading = false
		}
	}
})

export default currencySlice.reducer