import "./signup.css";
import  Signup_header  from "../../components/signup/Signup_header";
import  Signup_main  from "../../components/signup/Signup_main";
import  Signup_footer  from "../../components/signup/Signup_footer";


const SignUp = () => {
    return (
        <div className="container-signup">
            
            <Signup_header
                Signup_title = "daltter"
                Signup_login_btn = "Login"
            />
            
            <Signup_main
                Signup_btn = "Sign Up"
                Back_btn = "Go back"
            />
            
            <Signup_footer
                Footer_text = "Already have an account?"
            />
            
        </div>
    )
}

export {SignUp};