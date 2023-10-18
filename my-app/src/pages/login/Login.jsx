import "./login.css";
import Login_header  from "../../components/login/Login_header";
import Login_main  from "../../components/login/Login_main";
import Login_footer  from "../../components/login/Login_footer";


const Login = () => {
    return (
        <div className="container-login">
            <Login_header
                Title = "daltter"
                Btn = "Sign Up"
            />

            <Login_main
                Login_btn = "Login"
                Login_text = "Forgot password?"
                Back_btn = "Go back"
            />

            <Login_footer
                Footer_text = "Already have an account?"
                Footer_btn = "Sign Up"
            />
        </div>
    )
}

export {Login};