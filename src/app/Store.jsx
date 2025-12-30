import userDetail from "../reducers/userDetailSlice"
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
    reducer:{
        app: userDetail,
    }
});

 