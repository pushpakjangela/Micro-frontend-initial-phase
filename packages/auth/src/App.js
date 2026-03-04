import React from "react";
import { createGenerateClassName, StylesProvider } from "@material-ui/core/styles";
import { Router, Route, Switch } from "react-router-dom";
import { createMemoryHistory } from "history";
import SignIn from "./components/Signin";
import SignUp from "./components/Signup";

export default ({ history,onSignIn }) => {
    
    const defaultHistory = createMemoryHistory();
    const appHistory = history || defaultHistory;

    const generatedClassName = createGenerateClassName({
        productionPrefix: "au",
    });

    return (
        <StylesProvider generateClassName={generatedClassName}>
            <Router history={appHistory}>
                <Switch>
                    <Route path="/auth/signin" >
                        <SignIn onSignIn={onSignIn} />
                    </Route>
                    <Route path="/auth/signup">
                        <SignUp onSignIn={onSignIn}/>
                    </Route>
                </Switch>
            </Router>
        </StylesProvider>
    );
};
