import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import Layout from "../core/Layout";
import { signin, authenticate, isAuthenticated } from "../auth";

const Signin = () => {
    const [values, setValues] = useState({
        email: "",
        password: "",
        redirectToReferrer: false
    });

    const { email, password, redirectToReferrer } = values;
    const { user } = isAuthenticated();

    const handleChange = name => event => {
        setValues({ ...values,  [name]: event.target.value });
    };

    const clickSubmit = event => {
        event.preventDefault();
        setValues({ ...values });
        signin({ email, password }).then(data => {
                    authenticate(data, () => {
                    setValues({
                        ...values,
                        redirectToReferrer: true
                    });
                });
              })
        }


    const signUpForm = () => (
        <form>
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

    const redirectUser = () => {
        if (redirectToReferrer) {
            if (user && user.role === 1) {
                return <Redirect to="/admin/dashboard" />;
            } else {
                return <Redirect to="/user/dashboard" />;
            }
        }
        if (isAuthenticated()) {
            return <Redirect to="/" />;
        }
    };

    return (
        <Layout
            title="Signin"
            description="Hi our Hot Alcoholics , we are happy you,ve already signed up"
            className="container col-md-8 offset-md-2"
        >
                   {signUpForm()}
            {redirectUser()}
        </Layout>
    );
};

export default Signin;
