import React, { useState, useEffect } from "react";
import Layout from "../core/Layout";
import { isAuthenticated } from "../auth";
import { Link } from "react-router-dom";
import { createCategory } from "./apiAdmin";


const AddCategory = () => {
    const [values, setValues] = useState({
        name: "",
        description: "",
     history:""  ,
        photo: "",
        loading: false,
        error: "",
        createdCategory: "",
        redirectToProfile: false,
        formData: ""
    });
    console.log(values)

    const { user, token } = isAuthenticated();
    const {
        name,
        description,
        history,
        loading,
        error,
        createdCategory,
        redirectToProfile,
        formData
    } = values;

  
    useEffect(() => {
        setValues({
            ...values,
            formData: new FormData()
        });

    }, []);

    const handleChange = name => event => {
        const value =
            name === "photo" ? event.target.files[0] : event.target.value;
        formData.set(name, value);
        setValues({ ...values, [name]: value });
    };

    const clickSubmit = event => {
        event.preventDefault();
        setValues({ ...values, error: "", loading: true });

        createCategory(user._id, token, formData).then(data => {
                setValues({
                    ...values,
                    name: "",
                    description: "",
                    photo: "",
                    
                    loading: false,
                    createdCategory: data.name
                });
            }
        );
    };

    const newPostForm = () => (
        <form className="mb-3" onSubmit={clickSubmit}>
            <h4>Post Photo</h4>
            <div className="form-group">
                <label className="btn btn-secondary">
                    <input
                        onChange={handleChange("photo")}
                        type="file"
                        name="photo"
                        accept="image/*"
                    />
                </label>
            </div>

            <div className="form-group">
                <label className="text-muted">Name</label>
                <input
                    onChange={handleChange("name")}
                    type="text"
                    className="form-control"
                    value={name}
                />
            </div>

            <div className="form-group">
                <label className="text-muted">Description</label>
                <textarea
                    onChange={handleChange("description")}
                    className="form-control"
                    value={description}
                />
            </div>

          
            <div className="form-group">
                <label className="text-muted">History</label>
                <textarea
                    onChange={handleChange("history")}
                    className="form-control"
                    value={history}
                />
            </div>


         

            <button className="btn btn-outline-primary">Create Category</button>
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
            className="alert alert-info"
            style={{ display: createdCategory ? "" : "none" }}
        >
            <h2>{`${createdCategory}`} is created!</h2>
        </div>
    );

    const showLoading = () =>
        loading && (
            <div className="alert alert-success">
                <h2>Loading...</h2>
            </div>
        );

    return (
        <Layout
            title="Add a new Category"
            description={`G'day ${user.name}, ready to add a new Category?`}
        >
            <div className="row">
                <div className="col-md-8 offset-md-2">
                    {showLoading()}
                    {showSuccess()}
                    {showError()}
                    {newPostForm()}
                </div>
            </div>
        </Layout>
    );
};

export default AddCategory;
