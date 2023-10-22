import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
// or any other HTTP client library

const ArtApiKey = process.env.REACT_APP_ART_API_KEY
const BaseUrl = process.env.REACT_APP_BASE_URL

// @ts-ignore
export const ArtApi = createApi({
  reducerPath: 'ArtApi',
  baseQuery: fetchBaseQuery({ baseUrl: BaseUrl }),
  endpoints: (builder) => ({
    // Get single Art
    getArt: builder.query({
      query: (objectNumber) => `/nl/collection/${objectNumber}?key=${ArtApiKey}`,
    }),

    // Get and Search Arts
    getAndSearchArts: builder.query({
      query: ({ searchQuery }) => {
        // Get Arts by search
        if (searchQuery) {
          return `nl/collection?q=${searchQuery}&key=${ArtApiKey}`
        }
        return `/nl/collection?key=${ArtApiKey}&ps=90`
      },
    }),
  }),
})

export const { useGetArtQuery, useGetAndSearchArtsQuery } = ArtApi
