import Quote from "../components/Quote";
import SignUp from "@/components/Signup";

const Signup = ()=>{
    return (
       <div className="grid grid-cols-1 lg:grid-cols-2">
          <SignUp/>
          <div className="invisible lg:visible">
            <Quote />
          </div>
         
       </div>
    );
}

export default Signup;