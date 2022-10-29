import { createSlice } from '@reduxjs/toolkit'
export type LoginState = {
  isLoggedIn: boolean
  userName: string
  password: string
  error: boolean,
  errorMessage: string
}

const initialState: LoginState = {
  isLoggedIn: false,
  userName: "",
  password: "",
  error: false,
  errorMessage: "Error message"
}

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setErrorMesage: (state, { payload }) => {
      state.errorMessage = payload
      state.error = true
    },
    onUserChange: (state, { payload }) => {
      state.userName = payload
    },
    onEmailChange: (state, { payload }) => {
      state.password = payload
    },
    cacheCredentials: (state) => {
      localStorage.setItem('userName', state.userName)
      localStorage.setItem('password', state.password)
    },
    onLogin: (state) => {
      state.error = false
      state.isLoggedIn = true
    },
  }
})

export const { setErrorMesage, onUserChange, onEmailChange, onLogin, cacheCredentials } = loginSlice.actions

export default loginSlice.reducer