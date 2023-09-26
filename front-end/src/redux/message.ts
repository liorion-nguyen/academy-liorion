import { createSlice } from "@reduxjs/toolkit";

const MessageSlice = createSlice({
    name: 'message',
    initialState: {
        icon: '',
    },
    reducers: {
        SetIcon(state, action) {
            return {
                ...state,
                icon: action.payload,
            }
        },
    },
})

export const MessageActions = MessageSlice.actions;
export default MessageSlice.reducer;