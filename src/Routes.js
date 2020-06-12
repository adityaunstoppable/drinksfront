import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Signup from "./user/Signup";
import Signin from "./user/Signin";
import Home from "./core/Home";
// import PrivateRoute from "./auth/PrivateRoute";
import AdminRoute from "./auth/AdminRoute";
import AddCategory from "./admin/AddCategory";
import AddProduct from "./admin/AddProduct";
// import Shop from "./core/Shop";
import Category from "./core/Category";
import AdminDashboard from "./user/AdminDashboard";


const Routes = () => {
    return (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Home} />
          <Route path="/signin" exact component={Signin} />
            <Route path="/signup" exact component={Signup} />
            <Route path="/category/:categoryId" exact component={Category} />
            <AdminRoute
                path="/admin/dashboard"
                exact
                component={AdminDashboard}
                
            />

                <AdminRoute
                path="/create/category"
                exact
                component={AddCategory}
            />
              <AdminRoute
                path="/create/product"
                exact
                component={AddProduct}
            />
            {/* <PrivateRoute
                path="/user/dashboard"
                exact
                component={Dashboard}
            />
            

            <AdminRoute
                path="/create/product"
                exact
                component={AddProduct}
            />
            <Route path="/product/:productId" exact component={Product} />
            <Route path="/cart" exact component={Cart} /> */}
            {/* <AdminRoute path="/admin/orders" exact component={Orders} />
            <PrivateRoute
                path="/profile/:userId"
                exact
                component={Profile}
            /> */}
        </Switch>
    </BrowserRouter>
);
};

export default Routes;

