import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userData: []
}

export const userSlice = createSlice({
    name: "userSlice",
    initialState,
    reducers: {
        fetchAndSetUserData: (state, action) => {
            state.userData = action.payload
        }
    }
})

export const { fetchAndSetUserData } = userSlice.actions;
export default userSlice.reducer;