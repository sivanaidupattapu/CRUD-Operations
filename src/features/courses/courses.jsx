import React, { useEffect } from "react";
import { useDeleteCourseMutation, useGetAllCoursesQuery, useLazyGetAllCoursesQuery } from "../../services/courseApi";
import { useNavigate } from "react-router-dom";
function Courses() {
    var { isLoading, data } = useGetAllCoursesQuery()
    console.log('isLoading Course ::', isLoading)
    console.log('data Course ::', data)
    var [deletecourseFn] = useLazyGetAllCoursesQuery();
    var [deleteCourse] = useDeleteCourseMutation();
    var navigate = useNavigate()
    function Updatecourse(course) {
        console.log('Course ::', course);
        navigate('/Editcourse', { state: course })
    }
    function deletecourHandler(id) {
        deleteCourse(id).then((res) => {
            deletecourseFn()
        })
    }
    useEffect(() => { deletecourseFn() }, [])
    return <div>
        <h2 className="text-success text-center">Courses</h2>
        {isLoading ? <button class="btn btn-danger m-1" type="button" disabled>
            <span class="spinner-border spinner-border-sm" aria-hidden="true"></span>
            <span role="status">Loading...</span>
        </button> : <div>
            <table className="table bordered">
                <thead>
                    <tr>
                        <th>Course</th>
                        <th>Fee</th>
                        <th>Course Duration</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data?.map((c, i) => {
                            return <tr key={i}>
                                <td>{c.course}</td>
                                <td>{c.fee}</td>
                                <td>{c.duration}</td>
                                <td><button className="btn btn-dark"
                                    onClick={() => { Updatecourse(c) }}>Edit</button></td>
                                <td><button className="btn btn-warning"
                                    onClick={(() => { deletecourHandler(c.id) })}>Delete</button></td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
        }

    </div>
}
export default Courses