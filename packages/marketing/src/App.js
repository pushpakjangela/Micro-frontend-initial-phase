import React from "react";
import ReactDOM from "react-dom";
import { Switch,Route,BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";
import { StylesProvider } from "@material-ui/core/styles";
import Landing from "./components/Landing";
import Pricing from "./components/Pricing";
export default () => {
    return (
        <div>

        <StylesProvider>
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