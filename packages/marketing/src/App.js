import React from "react";
import ReactDOM from "react-dom";
import { createGenerateClassName, StylesProvider } from "@material-ui/core/styles";
import Landing from "./components/Landing";
import Pricing from "./components/Pricing";
import { BrowserRouter, Route, Switch } from "react-router-dom";
export default () => {

    const generatedClassName = createGenerateClassName({
        productionPrefix: "ma",
    })
    return (
        <div>

        <StylesProvider generateClassName={generatedClassName}>
            <BrowserRouter>
                <Switch>
                    <Route path="/" component={Landing} />
                    <Route exact path="/pricing" component={Pricing} />
                </Switch>
            </BrowserRouter>
        </StylesProvider>
        </div>

    );
}