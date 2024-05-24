import { Field, Formik, Form } from "formik";
import React from "react";
import { useAddPostMutation } from "../../services/postsApi";
function Addpost() {
    let [addPost] = useAddPostMutation()
    return <div className="border border-2 border-warning m-1 p-2">
        <h2 className="text-center text-primary">Add Post</h2>
        <Formik
            initialValues={
                {
                    title: '',
                    author: ''
                }
            }
            onSubmit={(values) => {
                return addPost(values).then((res) => { console.log(res) })
            }}
        >
            <Form className="text-center">
                <label>Title : </label>
                <Field type='text' name='title' className="m-1"></Field>
                <br />
                <label>Author :</label>
                <Field type='text' name='author' className="m-1"></Field>
                <br />
                <button className="btn btn-success m-1" >Add Post</button>
            </Form>
        </Formik>
    </div>
}
export default Addpost