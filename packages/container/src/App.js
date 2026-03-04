import Header from "./components/Header";
import { Route, Switch, Redirect, Router } from "react-router-dom";
import { createGenerateClassName, StylesProvider } from "@material-ui/core/styles";
import { createBrowserHistory } from "history";
import React, { lazy, Suspense, useEffect } from "react";
import Progress from "./components/Progress";
import { useState } from "react";
const AuthLazy = lazy(() => import("./components/AuthApp"));
const MarketingLazy = lazy(() => import("./components/MarketingApp"));
const DashboardLazy = lazy(() => import("./components/DashboardApp"));
const history = createBrowserHistory();
export default () => {
    const [isSignedIn, setIsSignedIn] = useState(false);

    const generatedClassName = createGenerateClassName({
        productionPrefix: "co",
    })

    useEffect(() => {
        if (isSignedIn) {
            history.push("/dashboard");
        }
    }, [isSignedIn]);
    return (<>
        <Router history={history}>

            <StylesProvider generateClassName={generatedClassName}>
                <div>
                    <Header onSignOut={() => setIsSignedIn(false)} isSignedIn={isSignedIn} />
                    <Suspense fallback={<Progress />}>
                        <Switch>
                            <Route path="/auth">
                                <AuthLazy onSignIn={() => setIsSignedIn(true)} />
                            </Route>
                            <Route path="/dashboard">
                                {!isSignedIn && <Redirect to="/" />}
                                <DashboardLazy />
                            </Route>
                            <Route path="/" component={MarketingLazy} />
                        </Switch>
                    </Suspense>

                </div>
            </StylesProvider>
        </Router>

    </>

    );
};
