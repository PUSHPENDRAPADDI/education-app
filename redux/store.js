import { configureStore } from '@reduxjs/toolkit'
import { userReducer } from './features/auth/userReducer'

export default configureStore({
    reducer: {
        userReducer: userReducer
    }
})

// HOST
export const server = `http://192.168.165.42:8080/api/v1`