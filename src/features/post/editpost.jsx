import { Field, Formik, Form } from "formik";
import React, { useEffect, useState } from "react";
import { useUpdatePostMutation } from "../../services/postsApi";
import { useLocation, useNavigate } from "react-router-dom";

function Editpost() {
    var { state } = useLocation();
    var navigate = useNavigate();
    var [updatePost] = useUpdatePostMutation();

    // State for initial values of the form
    var [initialValues, setInitialValues] = useState({
        title: '',
        author: '',
        id: ''
    });

    // Update the form's initial values when the state changes
    useEffect(() => {
        if (state) {
            setInitialValues({
                title: state.title,
                author: state.author,
                id: state.id
            });
        }
    }, [state]);

    console.log('state ::', { state });

    return (
        <div className="border border-2 border-warning m-1 p-2">
            <h2 className="text-center text-danger">Update Post</h2>
            <Formik
                enableReinitialize
                initialValues={initialValues}
                onSubmit={(values) => {
                    updatePost(values).then((res) => {
                        navigate('/posts');
                    });
                }}
            >

                <Form className="text-center">
                    <label>Title : </label>
                    <Field type='text' name='title' className="m-1" />
                    <br />
                    <label>Author :</label>
                    <Field type='text' name='author' className="m-1" />
                    <br />
                    <button type="submit" className="btn btn-success m-1">Update Post</button>
                </Form>

            </Formik>
        </div>
    );
}

export default Editpost;




// import { Field, Formik, Form } from "formik";
// import React from "react";
// import { useUpdatePostMutation } from "../../services/postsApi";
// import { useLocation, useNavigate } from "react-router-dom";
// function Editpost() {
//     var {state} = useLocation()
//     console.log('state ::',{state})
//    var navigate= useNavigate()

//     var [updatePost]= useUpdatePostMutation()
//     return <div className="border border-2 border-warning m-1 p-2">
//         <h2 className="text-center text-danger">Update Post</h2>
//         <Formik
//             initialValues={
//                 {
//                     title: '',
//                     author: '',
//                     id:''
//                 }
//             }
//             onSubmit={(values) => {
//                 return updatePost(values).then((res)=>{navigate('/posts')})
//             }}
//         >
//             <Form className="text-center">
//                 <label>Title : </label>
//                 <Field type='text' name='title' className="m-1"></Field>
//                 <br />
//                 <label>Author :</label>
//                 <Field type='text' name='author' className="m-1"></Field>
//                 <br />
//                 <button className="btn btn-success m-1" >Update Post</button>
//             </Form>
//         </Formik>
//     </div>
// }
// export default Editpost