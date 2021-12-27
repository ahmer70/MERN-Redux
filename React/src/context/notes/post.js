import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
export const postApi=createApi({
    reducerPath:'postApi',
baseQuery:fetchBaseQuery({
    baseUrl:'http://localhost:5000/',
}),
endpoints:(builder)=>({
    getAllPost:builder.query({
        query:()=>({
            url:'api/notes/fetchallnotes',
            method:'GET',
            headers: {
                "Content-Type": "application/json",
                "auth-token":localStorage.getItem('token'),
              },         
        }),
    })
})
});

export const{useGetAllPostQuery}=postApi;
