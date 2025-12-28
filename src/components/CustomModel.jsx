import { useSelector } from "react-redux"


const CustomModel = ({id,setPopup}) => {
    const allUsers = useSelector((state)=>state.app.users);
    const singleUser = allUsers.find(user => user.id === id);
    if(!singleUser) return null;

  return (
        <div className="bg-black fixed  inset-0 flex justify-center items-center bg-opacity-80 z-50">
    <div className="bg-white p-10 h-80 w-80 shadow-lg rounded-[10px] ">
            <button
          onClick={() => setPopup(false)}
          className="absolute top-3 right-3 text-gray-600 hover:text-gray-900 text-2xl font-bold"
        >
          ✕
        </button>
          <div className="space-y-3">
          <h1 className="text-xl font-bold text-gray-800">
            <span className="text-gray-600">Name:</span> {singleUser.name}
          </h1>
          <h2 className="text-lg text-gray-700">
            <span className="text-gray-600">Email:</span> {singleUser.email}
          </h2>
          <h3 className="text-lg text-gray-700">
            <span className="text-gray-600">Age:</span> {singleUser.age}
          </h3>
          <h4 className="text-lg text-gray-700">
            <span className="text-gray-600">Gender:</span> {singleUser.gender}
          </h4>
        </div>

        {/* Close Modal Button */}
        <button
          onClick={() => setPopup(false)}
          className="mt-6 w-full bg-red-600 hover:bg-red-700 text-white font-medium py-2 rounded-lg transition-colors"
        >
          Close
        </button>
        </div>
        </div>
  )
}

export default CustomModel