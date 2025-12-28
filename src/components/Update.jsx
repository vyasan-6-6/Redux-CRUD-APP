import {   useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import { updateUser } from "../features/userDetailSlice";

 

const Update = () => {
    const {id} = useParams();
const navigate = useNavigate();
const dispatch = useDispatch();
    const [update,setUpdateData] = useState({})
    const {users,loading} = useSelector((state)=>state.app);
   useEffect(() => {
      if(id && users && users.length>0){
    const user = users.find(user =>user.id === id);
    
    if(user){

        setUpdateData(user);
    }
   
}

}, [id,users]);

if(loading){
    return <h1>Loading....</h1>
}

if(!update || !update.id){
     return <h2 className="text-center mt-10">User not found</h2>;
}

const newData = (e)=>{
    const {name,value } = e.target;
    setUpdateData({...update,[name]:value})
}

const updateHandler = (e)=>{
e.preventDefault();
dispatch(updateUser(update));
setUpdateData({});
navigate("/read")
}
  return (
    
    <div className="max-w-2xl mx-auto mt-10 bg-white shadow-lg rounded-lg  overflow-hidden">
      
     
<div  className="bg-blue-600 text-white px-6 py-4">
    <h2 className="text-2xl font-bold">Update User  </h2>
  </div>

   
  <form onSubmit={updateHandler} className="px-6 py-6 space-y-4">
    
    <div className="border-b pb-3">
      <label htmlFor="name" className="font-semibold text-gray-700">Name:</label>
      <input  name="name" className="text-gray-600 ml-20" value= {update && update.name || ""} onChange={newData}/>
    </div>

    
    <div className="border-b pb-3">
      <label htmlFor="email" className="font-semibold text-gray-700">Email:</label>
      <input  name="email" className="text-gray-600 ml-16" value= {update && update.email || ""} onChange={newData}/>
    </div>


  
    <div className="border-b pb-3">
      <label htmlFor="age" className="font-semibold text-gray-700">Age:</label>
      <input  name="age" className="text-gray-600 ml-24" value= {update && update.age || ""} onChange={newData}/>
    </div>
  
    <div className="border-b pb-3">
    <label className="block text-gray-700 font-medium mb-3">Gender</label>
      <div className="space-y-2">
        <div className="flex items-center">
          <input
            type="radio"
            id="male"
            name="gender"
            value="male"
            checked={ update && update.gender === "male"}
             onChange={newData}
            className="w-4 h-4 text-blue-600 cursor-pointer"  
          />
          <label htmlFor="male" className="ml-2 cursor-pointer text-gray-700">Male</label>
        </div>
        <div className="flex items-center">
          <input
            type="radio"
            id="female"
            name="gender"
            value="female"
            checked={ update && update.gender === "female"}
             onChange={newData}
            className="w-4 h-4 text-blue-600 cursor-pointer"  
          />
          <label htmlFor="female" className="ml-2 cursor-pointer text-gray-700">Female</label>
        </div>
        <div className="flex items-center">
          <input
            type="radio"
            id="other"
            name="gender"
            value="other"
            checked={update && update.gender === "other"}
             onChange={newData}
            className="w-4 h-4 text-blue-600 cursor-pointer"  
          />
          <label htmlFor="other" className="ml-2 cursor-pointer text-gray-700">Other</label>
        </div>
      </div>
      
    </div>
 
  
  <div className="bg-gray-100 px-6 py-4 flex gap-3">
    <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-lg transition-colors">
     Submit
    </button>
     
  </div>

    
    </form>
 </div>
 
  )
}

export default Update