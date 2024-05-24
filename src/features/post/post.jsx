import React from "react";
import { useDeletePostMutation, useGetAllPostsQuery, useLazyGetAllPostsQuery } from "../../services/postsApi";
import {  useNavigate } from "react-router-dom";
import { useEffect } from "react";
function Posts() {
    var { isLoading, data } = useGetAllPostsQuery()
    var [deletePost] = useDeletePostMutation()
    var [deletefn] = useLazyGetAllPostsQuery()
    var navigate = useNavigate()
    console.log('post isloading ::', isLoading)
    console.log('post data ::', data)
    function deleteHandler(id) {
        deletePost(id).then(() => {
            deletefn()
        })
    }
    function editpost(post) {
        console.log('post ::',post)
        navigate('/editpost',{state:post})
    }
    useEffect(()=>{
        deletefn()
    },[])
    return <div className="border border-2 border-danger m-1 p-2">
        <h2 className="text-center text-warning">Posts Components</h2>
        <div>
            {isLoading ?
                <button class="btn btn-danger m-1" type="button" disabled>
                    <span class="spinner-border spinner-border-sm" aria-hidden="true"></span>
                    <span role="status">Loading...</span>
                </button>
                : data?.map((t, i) => {
                    return <li key={i}>{t.title}-{t.author}
                        <button className="btn btn-primary m-1"
                            onClick={() => { editpost(t) }}>Edit</button>
                        <button className="btn btn-danger m-1"
                            onClick={() => { deleteHandler(t.id) }}>Delete</button>
                    </li>
                })
            }
        </div>
    </div>
}
export default Posts