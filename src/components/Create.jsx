import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { createUser } from "../features/userDetailSlice";
import { useNavigate } from "react-router-dom";

 
const Create = ( ) => {
  const [users,setUsers] = useState({});
  const dispatch = useDispatch()
const navigate = useNavigate()
  const getUserData = (e)=>{
    setUsers({...users,[e.target.name]:e.target.value})
    
  };

  const handleSubmit = (e)=>{
    console.log("users", users);
    e.preventDefault()
    dispatch(createUser(users));
    setUsers({});
    navigate('/read')
  }

  useEffect(()=>{
    console.log(users);

  },[users])

  return (
    <div className="max-w-md mx-auto mt-10 bg-white shadow-lg rounded-lg p-8">
  <h2 className="text-2xl font-bold mb-6 text-gray-800">Contact Form</h2>
  
  <form className="space-y-5" onSubmit={handleSubmit}>
    {/* Name Field */}
    <div>
      <label className="block text-gray-700 font-medium mb-2">Name</label>
      <input
      name="name"
      value={users.name||""}
        type="text"
        placeholder="Enter your name"
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" onChange={getUserData}
      />
    </div>

    {/* Email Field */}
    <div>
      <label className="block text-gray-700 font-medium mb-2">Email</label>
      <input
      name="email"
      value={users.email||""}
        type="email"
        placeholder="Enter your email"
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" onChange={getUserData}
      />
    </div>

    {/* Age Field */}
    <div>
      <label className="block text-gray-700 font-medium mb-2">Age</label>
      <input
      name="age"
      value={users.age||''}
        type="number"
        placeholder="Enter your age"
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" onChange={getUserData}
      />
    </div>

    {/* Gender Radio Buttons */}
    <div>
      <label className="block text-gray-700 font-medium mb-3">Gender</label>
      <div className="space-y-2">
        <div className="flex items-center">
          <input
            type="radio"
            id="male"
            name="gender"
            value="male"
            checked={users.gender === "male"}
            className="w-4 h-4 text-blue-600 cursor-pointer" onChange={getUserData}
          />
          <label htmlFor="male" className="ml-2 cursor-pointer text-gray-700">Male</label>
        </div>
        <div className="flex items-center">
          <input
            type="radio"
            id="female"
            name="gender"
            value="female"
            checked={users.gender === "female"}
            className="w-4 h-4 text-blue-600 cursor-pointer" onChange={getUserData}
          />
          <label htmlFor="female" className="ml-2 cursor-pointer text-gray-700">Female</label>
        </div>
        <div className="flex items-center">
          <input
            type="radio"
            id="other"
            name="gender"
            value="other"
            className="w-4 h-4 text-blue-600 cursor-pointer" onChange={getUserData}
          />
          <label htmlFor="other" className="ml-2 cursor-pointer text-gray-700">Other</label>
        </div>
      </div>
    </div>

    {/* Submit Button */}
    <button
      type="submit"
      className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-lg transition-colors"
    >
      Submit
    </button>
  </form>
</div>
  );
};

export default Create;