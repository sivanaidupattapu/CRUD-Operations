import { Field, Formik, Form } from "formik"; 
import React, { useEffect, useState } from "react"; 
import { useLocation, useNavigate } from "react-router-dom";
import { useUpdateCourseMutation } from "../../services/courseApi";

function Editcourse() {
    var { state } = useLocation();
    var navigate = useNavigate();
    var [updateCourse]= useUpdateCourseMutation();

    // State to hold initial form values
    var [initialValues, setInitialValues] = useState({
        course: '',
        duration: '',
        fee: '',
        id: ''
    });

    // useEffect to update the initial form values when the state changes
    useEffect(() => {
        if (state) {
            setInitialValues({
                course: state.course,
                duration: state.duration,
                fee: state.fee,
                id: state.id
            });
        }
    }, [state]);

    console.log('state ::', { state });

    return (
        <div className="border border-2 border-warning m-1 p-2">
            <h2 className="text-center text-danger">Update Course</h2>
            <Formik
                enableReinitialize
                initialValues={initialValues} 
                onSubmit={(values) => {
                    updateCourse(values).then((res) => {
                        navigate('/courses');
                    });
                }}
            >
                <Form className="text-center">
                    <label>Course: </label>
                    <Field type='text' name='course' className="m-1" />
                    <br />
                    <label>Duration: </label>
                    <Field type='text' name='duration' className="m-1" />
                    <br />
                    <label>Fee: </label>
                    <Field type='text' name='fee' className="m-1" />
                    <br />
                    <button type="submit" className="btn btn-success m-1">Update Course</button>
                </Form>
            </Formik>
        </div>
    );
}

export default Editcourse;
