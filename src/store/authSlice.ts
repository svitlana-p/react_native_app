import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface User {
    email: string;
    password: string;
    photo: string;
}

interface AuthState {
    isLoggedIn: boolean;
    user: User | null;
}

const initialState: AuthState = {
    isLoggedIn: false,
    user: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action: PayloadAction<User>) => {
            state.isLoggedIn = true;
            state.user = action.payload;
        },
        logout: (state) => {
            state.isLoggedIn = false;
            state.user = null;
        },
        setUserPhoto: (state, action: PayloadAction<string>) => {
            if (state.user) {
                state.user.photo = action.payload;
            }
        },
    },
});

export const { login, logout, setUserPhoto } = authSlice.actions;
export default authSlice.reducer;
