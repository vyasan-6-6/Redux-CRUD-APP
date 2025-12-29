import {   useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import { showUser, updateUser } from "../features/userDetailSlice";
import { ErrorMessage, Field, Form, Formik } from "formik";
import validationSchema from "../validation/UpdateValidation"

 

const Update = () => {
    const {id} = useParams();
const navigate = useNavigate();
const dispatch = useDispatch();
    const [initialState,setInitialState] = useState({
      id:"",
      name:"",
      email:"",
      age:"",
      gender:"",
    })
    const {users,loading} = useSelector((state)=>state.app);
    const existingEmails = users.filter(user =>user.id !== id).map(user=>user.email);

   useEffect(() => {
   if(users.length ===0){
    dispatch(showUser())
   }

      if(id && users && users.length>0){
    const user = users.find(user =>user.id === id);
    
    if(user){

        setInitialState(user);
    }
   
}

}, [id,users,dispatch]);

if(loading){
    return <h1>Loading....</h1>
}

if(!initialState.id){
     return <h2 className="text-center mt-10">User not found</h2>;
}
 

const updateHandler = (values)=>{
 dispatch(updateUser(values))
navigate("/read")
};

  return (
    
    <div className="max-w-2xl mx-auto mt-10 bg-white shadow-lg rounded-lg  overflow-hidden">
      
     
<div  className="bg-blue-600 text-white px-6 py-4">
    <h2 className="text-2xl font-bold">Update User  </h2>
  </div>

   <Formik 
   validationSchema={validationSchema(existingEmails)}
   enableReinitialize={true}
   onSubmit={updateHandler}
   initialValues={initialState}
   >
    {({errors,touched})=>(
      
  <Form   className="px-6 py-6 space-y-4">
    
    <div className="border-b pb-3">
      <label htmlFor="name" className="font-semibold text-gray-700">Name:</label>
      <Field  name="name" type="text" className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2  ${
                  touched.name && errors.name
                    ? "border-red-500 focus:ring-red-500"
                    : "border-gray-300 focus:ring-blue-500"
                }`}/>
                <ErrorMessage name="name">
                {(msg) => <p className="text-red-500 text-sm mt-1">{msg}</p>}
              </ErrorMessage>
    </div>

    
    <div className="border-b pb-3">
      <label htmlFor="email" className="font-semibold text-gray-700">Email:</label>
      <Field  type="email" name="email" className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                  touched.email && errors.email
                    ? "border-red-500 focus:ring-red-500"
                    : "border-gray-300 focus:ring-blue-500"
                } `} />
                <ErrorMessage name="email" >
                {(msg)=><p className="text-red-500 text-sm mt-1">{msg}</p>}
                </ErrorMessage>
    </div>


  
    <div className="border-b pb-3">
      <label htmlFor="age" className="font-semibold text-gray-700">Age:</label>
      <Field type="number" name="age" className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                  touched.age && errors.age
                    ? "border-red-500 focus:ring-red-500"
                    : "border-gray-300 focus:ring-blue-500"
                }`}  /><ErrorMessage name="age">
                {(msg) => <p className="text-red-500 text-sm mt-1">{msg}</p>}
              </ErrorMessage>
    </div>
  
    <div className="border-b pb-3">
    <label className="block text-gray-700 font-medium mb-3">Gender</label>
      <div className="space-y-2">
        <div className="flex items-center">
          <Field
            type="radio"
            id="male"
            name="gender"
            value="male"
            
            className="w-4 h-4 text-blue-600 cursor-pointer"  
          />
          <label htmlFor="male" className="ml-2 cursor-pointer text-gray-700">Male</label>
        </div>
        <div className="flex items-center">
          <Field
            type="radio"
            id="female"
            name="gender"
            value="female"
             
            className="w-4 h-4 text-blue-600 cursor-pointer"  
          />
          <label htmlFor="female" className="ml-2 cursor-pointer text-gray-700">Female</label>
        </div>
        <div className="flex items-center">
          <Field
            type="radio"
            id="other"
            name="gender"
            value="other"
             
            className="w-4 h-4 text-blue-600 cursor-pointer"  
          />
          <label htmlFor="other" className="ml-2 cursor-pointer text-gray-700">Other</label>
        </div>
      </div>
      <ErrorMessage name="gender">
                {(msg) => <p className="text-red-500 text-sm mt-1">{msg}</p>}
              </ErrorMessage>
      
    </div>
 
  
  <div className="bg-gray-100 px-6 py-4 flex gap-3">
    <button type="submit" className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-lg transition-colors">
     Submit
    </button>
     
  </div>

    
    </Form>
    )}
   </Formik>
 </div>
 
  )
}

export default Update