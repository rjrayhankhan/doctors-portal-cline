import React, { useContext } from "react";
import { UserContext } from "../../../App";
import {Route, Redirect} from "react-router-dom";

const PrivateRoute = ({ children, ...rest }) => {
    const [ loggedInUser ] = useContext(UserContext);
    const token = sessionStorage.getItem('token')
    return (
        <Route
            {...rest}
            render={({ location }) =>
                loggedInUser.email || token ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
};

export default PrivateRoute;