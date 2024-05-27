// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const coursesApi = createApi({
    reducerPath: 'coursesApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000/courses' }),
    endpoints: (builder) => ({
        getAllCourses: builder.query({
            query: () => `/`,
        }),
        addCourse: builder.mutation({
            query: (newcourse) => {
                return {
                    url: `/`,
                    method: 'POST',
                    body: newcourse,
                }
            },
        }),
        deleteCourse: builder.mutation({
            query: (courseid) => {
                return {
                    url: `/${courseid}`,
                    method: 'DELETE'
                }
            },

        }),
        updateCourse: builder.mutation({
            query: (course) => {
                return {
                    url: `/${course.id}`,
                    method: 'PUT',
                    body:course
                }
            },

        }),
    }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
    useGetAllCoursesQuery,
    useLazyGetAllCoursesQuery,
    useAddCourseMutation,
    useDeleteCourseMutation,
    useUpdateCourseMutation
} = coursesApi