"use client";
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import { apiSlice } from "./slices/apiSlice";
import { userApiSlice } from "./slices/usersApiSlice";

export const store = configureStore({
	reducer: {
		auth: authReducer,
		api: apiSlice,
		user: userApiSlice,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(userApiSlice.middleware),
});

export const RootState = store.getState;
export const AppDispatch = store.dispatch;
