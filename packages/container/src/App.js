import Header from "./components/Header";
import MarketingApp from "./components/MarketingApp";
import { BrowserRouter } from "react-router-dom";
import { createGenerateClassName, StylesProvider } from "@material-ui/core/styles";

import React from "react";
export default () => {

    const generatedClassName = createGenerateClassName({
        productionPrefix: "co",
    })
    return (<>
        <StylesProvider generateClassName={generatedClassName}>
            <BrowserRouter>
                <div>
                    <Header />
                    <hr />
                    <MarketingApp />
                </div>
            </BrowserRouter>
        </StylesProvider>
    </>

    );
};
