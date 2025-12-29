import * as Yup from "yup";

 const UpdateValidation = (existingEmails = []) => Yup.object({
    name:Yup.string().required("Name is required").min(3," Name must be atleast 3 characters "),
    email:Yup.string().required("Email is required").email("Email invalid format").test("unique-email","Email already Exist..!",(value)=>{
        if(!value) return true;
        return !existingEmails.some(e => e.email === value && String(e.id) !== String(value.id));
    }),
    age:Yup.number().min(1,"Age must be atleast 1").max(120,"Age must be less than 120"),
    gender:Yup.string().required("Gender is required")
}) ;
export default  UpdateValidation;