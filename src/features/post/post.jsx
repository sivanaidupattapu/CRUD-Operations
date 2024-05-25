import React from "react";
import { useDeletePostMutation, useGetAllPostsQuery, useLazyGetAllPostsQuery } from "../../services/postsApi";
import { useNavigate } from "react-router-dom";
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
        console.log('post ::', post)
        navigate('/editpost', { state: post })
    }
    useEffect(() => {
        deletefn()
    }, [])
    return <div className="border border-2 border-danger m-1 p-2">
        <h2 className="text-center text-warning p-2">CRUD-Operations</h2>
        <div>
            {isLoading ?
                <button class="btn btn-danger m-1" type="button" disabled>
                    <span class="spinner-border spinner-border-sm" aria-hidden="true"></span>
                    <span role="status">Loading...</span>
                </button>
                : <div className="d-flex justify-content-center">
                    <table className="table table-bordered border-2 border-dark w-50">
                    <thead className="text-center">
                        <tr>
                        <th  style={{color:'purple'}}>Title</th>
                        <th  style={{color:'purple'}}>Author</th>
                        <th  style={{color:'purple'}}>Updation</th>
                        <th  style={{color:'purple'}}>Delection</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data?.map((t, i) => {
                                return <tr key={i}>
                                    <td>{t.title}</td>
                                    <td className="text-center">{t.author}</td>
                                    <td className="text-center"><button className="btn btn-primary m-1"
                                        onClick={() => { editpost(t) }}>Edit</button></td>
                                    <td className="text-center"><button className="btn btn-danger m-1"
                                        onClick={() => { deleteHandler(t.id) }}>Delete</button></td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
                </div>
                // <li key={i}>{t.title}-{t.author}
                //     <button className="btn btn-primary m-1"
                //         onClick={() => { editpost(t) }}>Edit</button>
                //     <button className="btn btn-danger m-1"
                //         onClick={() => { deleteHandler(t.id) }}>Delete</button>
                // </li>
                // })
            }
        </div>
    </div>
}
export default Posts