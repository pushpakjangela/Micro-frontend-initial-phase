import Header from "./components/Header";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { createGenerateClassName, StylesProvider } from "@material-ui/core/styles";

import React, { lazy, Suspense } from "react";
import Progress from "./components/Progress";
import { useState } from "react";
const AuthLazy = lazy(() => import("./components/AuthApp"));
const MarketingLazy = lazy(() => import("./components/MarketingApp"));
export default () => {
    const [isSignedIn, setIsSignedIn] = useState(false);

    const generatedClassName = createGenerateClassName({
        productionPrefix: "co",
    })
    return (<>
        <StylesProvider generateClassName={generatedClassName}>
            <BrowserRouter>
                <div>
                    <Header onSignOut={() => setIsSignedIn(false) } isSignedIn={isSignedIn}/>
                    <Suspense fallback={<Progress/>}>
                        <Switch>
                            <Route path="/auth">
                                <AuthLazy onSignIn={() => setIsSignedIn(true)} />
                            </Route>
                            <Route path="/" component={MarketingLazy} />
                        </Switch>
                    </Suspense>

                </div>
            </BrowserRouter>
        </StylesProvider>
    </>

    );
};
