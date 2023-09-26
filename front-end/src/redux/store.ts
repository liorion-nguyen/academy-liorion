import { configureStore } from "@reduxjs/toolkit";
import snackbar from './snackbar';
import message from './message';

const store = configureStore({
    reducer: {
        snackbar: snackbar,
        message: message,
    }
})

export default store;