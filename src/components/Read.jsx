import {   useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { showUser } from "../features/userDetailSlice"
import CustomModel from "./CustomModel";
 

 

const Read = () => {
    const dispatch = useDispatch();
    const {users,loading} = useSelector((state)=>state.app)
    useEffect(() => {
      dispatch(showUser())
      
    }, [dispatch]);
    
    const [id,setId] = useState(null);
    const [showPopup,setPopup] = useState(false);
  if(loading){
    return (<h2>Loading....</h2>)
  };
 
  return (
    
    <div className="max-w-2xl mx-auto mt-10 bg-white shadow-lg rounded-lg  overflow-hidden">
      {showPopup && <CustomModel id={id}   setPopup= {setPopup}/>}
   {users && users.length > 0 ? (
    users.map((user)=>( 
 <div key={user.id} className="space-y-6 ">
    
<div  className="bg-blue-600 text-white px-6 py-4">
    <h2 className="text-2xl font-bold">User Information</h2>
  </div>

   
  <div className="px-6 py-6 space-y-4">
    
    <div className="border-b pb-3">
      <span className="font-semibold text-gray-700">Name:</span>
      <span className="text-gray-600 ml-20"> {user.name}</span>
    </div>

    
    <div className="border-b pb-3">
      <span className="font-semibold text-gray-700">Email:</span>
      <span className="text-gray-600 ml-16"> {user.email}</span>
    </div>

  
    <div className="border-b pb-3">
      <span className="font-semibold text-gray-700">Gender:</span>
      <span className="text-gray-600 ml-24"> {user.gender}</span>
    </div>

    
    </div>

    <div className="pb-3 flex justify-center items-center">
      <button  className="font-semibold text-gray-600" onClick={()=>{setId(user.id);setPopup(true);}} >View</button>
  </div>
  
  <div className="bg-gray-100 px-6 py-4 flex gap-3">
    <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-lg transition-colors">
      Edit
    </button>
    <button className="flex-1 bg-red-600 hover:bg-red-700 text-white font-medium py-2 rounded-lg transition-colors">
      Delete
    </button>
  </div>
 </div>
 ))
   ):( <p>Users Not Found</p>)}
</div>
  )
}

export default Read