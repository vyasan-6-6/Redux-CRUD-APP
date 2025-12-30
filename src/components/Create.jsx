 
import { useDispatch, useSelector } from "react-redux";
import { createUser } from "../reducers/userDetailSlice";
import { useNavigate } from "react-router-dom";
import { ErrorMessage, Field, Form, Formik } from "formik";
import validationShema from "../validation/CreateValidation";

const Create = () => {
    
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {users} = useSelector((state)=>state.app);

    const existingEmails = users.map(user => user.email);
     

    const handleSubmit = (values) => {
        dispatch(createUser(values));
        navigate("/read");
    };
 
    return (
        <div className="max-w-md mx-auto mt-10 bg-white shadow-lg rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Contact Form</h2>
            <Formik
                validationSchema={validationShema(existingEmails)}
                initialValues={{ name: "", email: "", age: "", gender: "" }}
                onSubmit={(values, { resetForm }) => {
                    handleSubmit(values);
                    resetForm();
                }}
            >
                {({ errors, touched }) => (
                    <Form className="space-y-5">
                        {/* Name Field */}
                        <div>
                            <label className="block text-gray-700 font-medium mb-2">Name</label>
                            <Field
                                name="name"
                               
                                type="text"
                                placeholder="Enter your name"
                                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
  errors.name && touched.name
    ? "border-red-500 focus:ring-red-500"
    : "border-gray-300 focus:ring-blue-500"
}`}
                                
                            />
                            <ErrorMessage name="name" component="p" className="text-red-500 text-sm mt-1" />
                        </div>

                        {/* Email Field */}
                        <div>
                            <label className="block text-gray-700 font-medium mb-2">Email</label>
                            <Field
                                name="email"
                                 
                                type="email"
                                placeholder="Enter your email"
                               className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
  errors.name && touched.name
    ? "border-red-500 focus:ring-red-500"
    : "border-gray-300 focus:ring-blue-500"
}`}
                                
                            />
                            <ErrorMessage name="email" component="p" className="text-red-500 text-sm mt-1" />
                        </div>

                        {/* Age Field */}
                        <div>
                            <label className="block text-gray-700 font-medium mb-2">Age</label>
                            <Field
                                name="age"
                                 
                                type="number"
                                placeholder="Enter your age"
                               className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
  errors.name && touched.name
    ? "border-red-500 focus:ring-red-500"
    : "border-gray-300 focus:ring-blue-500"
}`}
                                
                            />
                            <ErrorMessage name="age" component="p" className="text-red-500 text-sm mt-1" />
                        </div>

                        {/* Gender Radio Buttons */}
                        <div>
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
                                    <label htmlFor="male" className="ml-2 cursor-pointer text-gray-700">
                                        Male
                                    </label>
                                </div>
                                <div className="flex items-center">
                                    <Field
                                        type="radio"
                                        id="female"
                                        name="gender"
                                        value="female"
                                         
                                        className="w-4 h-4 text-blue-600 cursor-pointer"
                                    />
                                    <label htmlFor="female" className="ml-2 cursor-pointer text-gray-700">
                                        Female
                                    </label>
                                </div>
                                <div className="flex items-center">
                                    <Field
                                        type="radio"
                                        id="other"
                                        name="gender"
                                        value="other"
                                        className="w-4 h-4 text-blue-600 cursor-pointer"
                                    />
                                    <label htmlFor="other" className="ml-2 cursor-pointer text-gray-700">
                                        Other
                                    </label>
                                </div>
                            </div>
                            {/* Error Message */}
                            <ErrorMessage name="gender">
                                {(msg) => <p className="text-red-500 text-sm mt-2">{msg}</p>}
                            </ErrorMessage>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-lg transition-colors"
                        >
                            Submit
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default Create;
