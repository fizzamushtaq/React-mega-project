import { configureStore, createSlice } from '@reduxjs/toolkit';

// Define the slice
const authSlice = createSlice({
    name: 'auth', // Correct slice creation
    initialState: {
        status: false,
        userData: null,
    },
    reducers: {
        login: (state, action) => {
            state.status = true;
            state.userData = action.payload.userData;
        },
        logout: (state) => {
            state.status = false;
            state.userData = null;
        },
    },
});

// Configure the store with the reducer
const store = configureStore({
    reducer: {
        auth: authSlice.reducer, // Set the reducer here
    },
});

// Export actions and store
export const { login, logout } = authSlice.actions;
export default store;
