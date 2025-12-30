import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, showUser } from "../reducers/userDetailSlice";
import CustomModel from "./CustomModel";
import { Link } from "react-router-dom";

const Read = () => {
    const dispatch = useDispatch();

    const { users, loading, searchData } = useSelector((state) => state.app);

    const [radioData,setRadioData] = useState('');

    useEffect(() => {
        dispatch(showUser());
    }, [dispatch]);

    const [id, setId] = useState(null);

    const [showPopup, setPopup] = useState(false);

    if (loading) {
        return <h2>Loading....</h2>;
    }

    return (
        <div className="max-w-2xl mx-auto mt-10 bg-white shadow-lg rounded-lg  overflow-hidden">
            <h1 className="flex justify-around items-center text-7xl">All Data</h1>
          <div className="flex justify-around items-center">
  <div className="flex items-center gap-2">
    <input type="radio" name="gender" id="All" value="" checked={radioData === ""}  onChange={(e)=> setRadioData(e.target.value)}/>
    <label htmlFor="All">All</label>
  </div>
  
  <div className="flex items-center gap-2">
    <input type="radio" name="gender" value="male" id="male" checked={radioData === "male"} onChange={(e)=> setRadioData(e.target.value)}/>
    <label htmlFor="male">Male</label>
  </div>
  
  <div className="flex items-center gap-2">
    <input type="radio" name="gender" value="female" id="female" checked={radioData === "female"} onChange={(e)=> setRadioData(e.target.value)}/>
    <label htmlFor="female">Female</label>
  </div>
</div>
            {showPopup && <CustomModel id={id} setPopup={setPopup} />}
            {users && users.length > 0 ? (
                users
                    .filter((user) => {
                        if (searchData.length === 0) {
                            return user;
                        } else {
                            return Object.values(user).join().toLowerCase().includes(searchData.toLowerCase());
                        }
                    }).filter(user=>{
                      if(radioData === "male"){
                        return user.gender === radioData;
                      }else if(radioData === "female"){
                        return user.gender === radioData;
                      }else  
                        return user;
                     
                    })
                    .map((user) => (
                        <div key={user.id} className="space-y-6 ">
                            <div className="bg-blue-600 text-white px-6 py-4">
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
                                <button
                                    className="font-semibold text-gray-600"
                                    onClick={() => {
                                        setId(user.id);
                                        setPopup(true);
                                    }}
                                >
                                    View
                                </button>
                            </div>

                            <div className="bg-gray-100 px-6 py-4 flex gap-3">
                                <Link
                                    to={`/edit/${user.id}`}
                                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-lg transition-colors flex justify-center items-center"
                                >
                                    Edit
                                </Link>
                                <button
                                    onClick={() => {
                                        if (window.confirm(`Are sure want to delete ${user.name}`)) {
                                            dispatch(deleteUser(user.id));
                                        }
                                    }}
                                    className="flex-1 bg-red-600 hover:bg-red-700 text-white font-medium py-2 rounded-lg transition-colors"
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    ))
            ) : (
                <p>Users Not Found</p>
            )}
        </div>
    );
};

export default Read;
