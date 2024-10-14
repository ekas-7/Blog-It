import Quote from "@/components/Quote";
import SignIn from "@/components/Signin";

const Signin = ()=>{
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <SignIn/>
          <div className="invisible lg:visible">
            <Quote />
          </div>
         
       </div>
    );
}

export default Signin;