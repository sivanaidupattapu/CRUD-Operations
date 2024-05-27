import { Formik, Form, Field } from "formik";
import React from "react";
import { useAddCourseMutation } from "../../services/courseApi";
function Addcourse() {
   var [addCourse]= useAddCourseMutation();
//    console.log('addcourse ::',Addcourse)
    return <div>
        <h2 className="text-center">Add Course</h2>
        <div className="d-flex justify-content-center">
            <Formik initialValues={{
                course: "",
                duration: "",
                fee: ""
            }}
            onSubmit={(values)=>{ return addCourse(values).then((res)=>{console.log(res)})
            //  addPost(values).then((res) => { console.log(res) })
            }}
            >
                <Form>
                    <Field type='text' name="course" placeholder='course' className='m-1'></Field>
                    <br />
                    <Field type='text' name="duration" placeholder='duration' className='m-1'></Field>
                    <br />
                    <Field type='number' name="fee" placeholder='feee' className='m-1'></Field>
                    <br />
                    <button className="btn btn-warning m-2">Add Course</button>
                </Form>
            </Formik>
        </div>
    </div>
}
export default Addcourse