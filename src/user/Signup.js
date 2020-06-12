import React,{useState} from "react"
import { Link } from "react-router-dom";
import Layout from "../core/Layout";
import { signup } from "../auth";

const Signup = () => {
    const [values, setValues] = useState({
        name: "",
        email: "",
        password: "",
        error: "",
        success: false

   });
   
    const { name, email, password , success, error } = values;

    const handleChange = name => event => {
        setValues({ ...values,error: false, [name]: event.target.value });
    };

    const clickSubmit = event => {
        event.preventDefault();
        setValues({ ...values, error: false });
        signup({ name, email, password }).then(data => {
            if (data.error) {
                setValues({ ...values, error: data.error, success: false });
            } else {
                setValues({
                    ...values,
                    name: "",
                    email: "",
                    password: "",
                    error: "",
                    success: true
                });
            }
        });
    };
    const signUpForm = () => (
        <form>
            <div className="form-group">
                <label className="text-white">Name</label>
                <input
                    onChange={handleChange("name")}
                    type="text"
                    className="form-control bg-dark"
                    value={name}
                    style={{color:"#ECD6D6"}}

                />
            </div>

            <div className="form-group">
                <label className="text-white">Email</label>
                <input
                    onChange={handleChange("email")}
                    type="email"
                    className="form-control bg-dark"
                    value={email}
                    style={{color:"#ECD6D6"}}
                    />
            </div>

            <div className="form-group">
                <label className="text-white">Password</label>
                <input
                    onChange={handleChange("password")}
                    type="password"
                    className="form-control bg-dark"
                    value={password}
                    style={{color:"#ECD6D6"}}

/>
            </div>
            <button onClick={clickSubmit} className="btn btn-dark">
                Submit
            </button>
        </form>
    );


    const showError = () => (
        <div
            className="alert alert-danger"
            style={{ display: error ? "" : "none" }}
        >
            {error}
        </div>
    );

    const showSuccess = () => (
        <div
            className="alert alert-secondary"
            style={{ display: success ? "" : "none" }}
        >
            New account is created. Please <Link to="/signin">Signin</Link>
        </div>
    );
       
        
    return (
        <Layout
            title="Signup"
            description="Signup , you Sexy Alcoholics"
            className="container col-md-8 offset-md-2"
        >
             {showSuccess()}
            {showError()}
      
            {signUpForm()}
        </Layout>
    );
};

export default Signup;
