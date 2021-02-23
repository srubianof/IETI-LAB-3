import React from "react"
import {Redirect, Route} from "react-router-dom"

export function PrivateRoute({component: Component, userLogged, ...rest}) {
    return (
        <Route
            {...rest}
            render={props => {
                return userLogged ? <Component {...props} /> : <Redirect to="/login"/>
            }}
        />
    )
}
