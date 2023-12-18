"use client";
import { apiSlice } from "./apiSlice";
const USERS_URL = "http://localhost:8000/api/users";

export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    signin: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/auth`,
        method: "POST",
        body: data,
      }),
    }),
    logout: builder.mutation({
      query: () => ({
        url: `${USERS_URL}/logout`,
        method: "POST",
      }),
    }),
    signup: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}`,
        method: "POST",
        body: data,
      }),
    }),
    updateUser: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/profile`,
        method: "PUT",
        body: data,
      }),
    }),
    fetchPlaylist: builder.mutation({
			query: (data) => ({
				url: `${USERS_URL}/playlist`,
				method: "POST",
				body: data,
			}),
		}),
  }),
});

export const {
  useSigninMutation,
  useLogoutMutation,
  useSignupMutation,
  useUpdateUserMutation,
  useFetchPlaylistMutation
} = userApiSlice;
